import path from "node:path";
import { fileURLToPath } from "node:url";
import { MongoClient } from "mongodb";
import { createAgent, tool } from "langchain";
import {
  ChatGoogleGenerativeAI,
  GoogleGenerativeAIEmbeddings,
} from "@langchain/google-genai";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { TextLoader } from "@langchain/classic/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { z } from "zod";

// ============================================================
// ESM __dirname setup
// ============================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================
// MongoDB Native Client
// ============================================================

let mongoClient: MongoClient | null = null;

const getMongoClient = async (): Promise<MongoClient> => {
  if (!mongoClient) {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    mongoClient = new MongoClient(uri);
    await mongoClient.connect();

    console.log("Connected to MongoDB");
  }

  return mongoClient;
};

// ============================================================
// Google Embeddings
// ============================================================

const getEmbeddings = (): GoogleGenerativeAIEmbeddings => {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error("GOOGLE_API_KEY is not defined in .env");
  }

  return new GoogleGenerativeAIEmbeddings({
    model: "gemini-embedding-2",
    apiKey,
  });
};

// ============================================================
// MongoDB Vector Store
// ============================================================

const getVectorStore = async () => {
  const client = await getMongoClient();

  const collection = client
    .db("edureach_db")
    .collection("knowledge_docs");

  return new MongoDBAtlasVectorSearch(getEmbeddings(), {
    collection: collection as any,
    indexName: "edureach_vector_index",
    textKey: "text",
    embeddingKey: "embedding",
  });
};

// ============================================================
// Retrieval Tool
// ============================================================

const createRetrieveTool = (vectorStore: MongoDBAtlasVectorSearch) => {
  return tool(
    async ({ query }) => {
      try {
        const results = await vectorStore.similaritySearch(query, 3);

        if (results.length === 0) {
          return "No relevant information was found in the knowledge base.";
        }

        return results
          .map((doc, index) => {
            return `Document ${index + 1}:\n${doc.pageContent}`;
          })
          .join("\n\n");
      } catch (error) {
        console.error("Retrieval error:", error);

        return "Unable to search the knowledge base.";
      }
    },
    {
      name: "retrieve_knowledge",
      description:
        "Search the EduReach knowledge base and return relevant information. Always use this tool before answering questions about EduReach College.",
      schema: z.object({
        query: z
          .string()
          .describe("The question or search query to look up"),
      }),
    }
  );
};

// ============================================================
// Initialize Knowledge Base
// Runs once when the server starts
// ============================================================

export const initializeKnowledgeBase = async (): Promise<void> => {
  const client = await getMongoClient();

  const collection = client
    .db("edureach_db")
    .collection("knowledge_docs");

  // ----------------------------------------------------------
  // Check whether embeddings already exist
  // ----------------------------------------------------------

  const docWithEmbedding = await collection.findOne({
    embedding: {
      $exists: true,
      $not: { $size: 0 },
    },
  });

  if (docWithEmbedding) {
    const count = await collection.countDocuments();

    console.log(
      `Knowledge base ready (${count} chunks with embeddings)`
    );

    return;
  }

  // ----------------------------------------------------------
  // Delete invalid existing documents
  // ----------------------------------------------------------

  const existingCount = await collection.countDocuments();

  if (existingCount > 0) {
    console.log(
      `Found ${existingCount} chunks without valid embeddings. Re-indexing...`
    );

    await collection.deleteMany({});
  }

  console.log("Indexing knowledge base...");

  // ----------------------------------------------------------
  // Create embeddings
  // ----------------------------------------------------------

  const embeddings = getEmbeddings();

  // ----------------------------------------------------------
  // Test Google API
  // ----------------------------------------------------------

  try {
    const testResult = await embeddings.embedQuery("test");

    console.log(
      `Google API key OK — embedding dimensions: ${testResult.length}`
    );
  } catch (error: any) {
    console.error("Embedding test failed!");
    console.error("Error:", error?.message || error);

    throw error;
  }

  // ----------------------------------------------------------
  // Load knowledge-base document
  // ----------------------------------------------------------

  const filePath = path.join(
    __dirname,
    "../../knowledge-base/edureach-knowledge.txt"
  );

  console.log(`Loading knowledge base from: ${filePath}`);

  const loader = new TextLoader(filePath);

  const docs = await loader.load();

  if (docs.length === 0) {
    throw new Error(
      "No documents found in knowledge base file"
    );
  }

  const totalCharacters = docs.reduce(
    (sum, doc) => sum + doc.pageContent.length,
    0
  );

  console.log(
    `Loaded ${totalCharacters} characters`
  );

  // ----------------------------------------------------------
  // Split document into chunks
  // ----------------------------------------------------------

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const allSplits = await splitter.splitDocuments(docs);

  console.log(
    `Split knowledge base into ${allSplits.length} chunks`
  );

  // ----------------------------------------------------------
  // Store embeddings in MongoDB Atlas
  // ----------------------------------------------------------

  const vectorStore = new MongoDBAtlasVectorSearch(
    embeddings,
    {
      collection: collection as any,
      indexName: "edureach_vector_index",
      textKey: "text",
      embeddingKey: "embedding",
    }
  );

  await vectorStore.addDocuments(allSplits);

  // ----------------------------------------------------------
  // Verify embeddings
  // ----------------------------------------------------------

  const verifyDoc = await collection.findOne({
    embedding: {
      $exists: true,
      $not: { $size: 0 },
    },
  });

  if (
    verifyDoc &&
    Array.isArray(verifyDoc.embedding) &&
    verifyDoc.embedding.length > 0
  ) {
    console.log(
      `${allSplits.length} chunks stored successfully`
    );

    console.log(
      `Embedding dimensions: ${verifyDoc.embedding.length}`
    );

    console.log(
      `Create MongoDB Atlas Vector Search index with numDimensions: ${verifyDoc.embedding.length}`
    );
  } else {
    await collection.deleteMany({});

    throw new Error(
      "Embeddings are empty. Google API returned no vectors."
    );
  }
};

// ============================================================
// Get RAG Response
// ============================================================

export const getRAGResponse = async (
  question: string
): Promise<string> => {
  try {
    // --------------------------------------------------------
    // Get vector store
    // --------------------------------------------------------

    const vectorStore = await getVectorStore();

    // --------------------------------------------------------
    // Create retrieval tool
    // --------------------------------------------------------

    const retrieve = createRetrieveTool(vectorStore);

    // --------------------------------------------------------
    // Create Gemini model
    // --------------------------------------------------------

    const model = new ChatGoogleGenerativeAI({
      model: "gemini-2.5-flash",
      temperature: 0.7,
    });
    
    // --------------------------------------------------------
    // Create LangChain Agent
    // --------------------------------------------------------

    const agent = createAgent({
      model,
      tools: [retrieve],

      systemPrompt:
        `You are EduReach Bot, a helpful AI counselor
for EduReach College, Hyderabad.

Always use the retrieve_knowledge tool before answering
questions about EduReach College.

Use only information retrieved from the knowledge base.

Be concise, friendly, and professional.

If the required information is not found, say:

"I don't have that information right now.
Click Talk to Us to speak with a counselor."`,
    });

    // --------------------------------------------------------
    // Invoke agent
    // --------------------------------------------------------

    const result = await agent.invoke({
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    });

    // --------------------------------------------------------
    // Get final response
    // --------------------------------------------------------

    const messages = result.messages;

    const lastMessage =
      messages[messages.length - 1];

    if (!lastMessage) {
      return "I couldn't generate a response. Please try again.";
    }

    if (typeof lastMessage.content === "string") {
      return lastMessage.content;
    }

    return JSON.stringify(lastMessage.content);
  } catch (error) {
    console.error("RAG Agent Error:", error);

    return "I'm having trouble right now. Please try again or click 'Talk to Us'.";
  }
};