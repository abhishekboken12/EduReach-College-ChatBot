import mongoose, { Schema, Document } from "mongoose";

export interface IKnowledgeDoc extends Document {
  text: string;
  embedding: number[];
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

const knowledgeDocSchema = new Schema<IKnowledgeDoc>(
  {
    text: {
      type: String,
      required: true,
    },
    embedding: {
      type: [Number],
      required: true,
    },
    metadata: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
    collection: "knowledge_docs",
  }
);

const KnowledgeDoc = mongoose.model<IKnowledgeDoc>(
  "KnowledgeDoc",
  knowledgeDocSchema
);
export default KnowledgeDoc;