const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const journalRoutes = require('./routes/journal');
const moodRoutes = require('./routes/mood');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("MindMate backend is running!");
});
app.use("/api/auth", authRoutes);

app.use('/api/journals', journalRoutes);
app.use('/api/moods', moodRoutes);

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
console.log(
  require("crypto").randomBytes(32).toString("base64"),
  "random bytes"
);
