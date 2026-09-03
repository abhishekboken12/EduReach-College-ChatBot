# EduReach — Agentic College Chatbot

**AI In The Real World — Connecting Students with Institutions**

Students often struggle with overwhelming college websites, spending hours searching multiple pages, waiting for calls or emails, or even visiting campuses just to get basic information like fees, admissions, and placements.

**The Solution**

## What is EduReach?

**EduReach** is a full-stack AI platform that connects students with institutions through:

- 🤖 **Agentic RAG Chatbot** — Autonomously retrieves college information and generates contextual answers.
- 📞 **AI Voice Counselor** — Talk to "Ava," an AI counselor available 24/7.
- 🌐 **College Information Website** — Explore courses, mentors, placements, and campus life.
- 🔐 **JWT Authentication** — Secure authentication for registered students and premium AI features.

> **One AI-powered platform where students can discover, ask, and connect with a college 24/7.**

## System Architecture — How It All Connects

```mermaid
flowchart TD

    A["Frontend<br/>React + TypeScript<br/><br/>
    • Homepage with college info<br/>
    • Login / Signup<br/>
    • Signup popup for visitors<br/>
    • Chat + Call features"]

    B["Backend<br/>Express.js + TypeScript<br/><br/>
    APIs:<br/>
    • Auth → /api/auth<br/>
    • Chat → /api/chat<br/>
    • Calls → /api/calls"]

    C["MongoDB Atlas<br/><br/>
    • Users<br/>
    • Knowledge Base<br/>
    • Vector Embeddings"]

    D["RAG Pipeline<br/><br/>
    • Gemini Embeddings<br/>
    • MongoDB Atlas Vector Search<br/>
    • Gemini LLM"]

    E["AI Voice Counselor<br/><br/>
    • Voice Call<br/>
    • AI Conversation"]

    A -->|"Axios<br/>HTTP Requests"| B
    B --> C
    B --> D
    B --> E