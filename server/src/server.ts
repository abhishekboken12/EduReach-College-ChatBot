import app from "./app.ts";
import connectDB from "./config/database.config.ts";

const PORT = process.env.PORT || 5000;

const start = async (): Promise<void> => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(" EduReach Server is running!");
      console.log(" URL: http://localhost:" + PORT);
      console.log(" Node: " + process.version);
      console.log(" Press Ctrl+C to stop");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

start();