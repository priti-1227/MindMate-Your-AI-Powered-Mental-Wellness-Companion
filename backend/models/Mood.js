const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mood: {
    type: String,
    enum: ["happy", "sad", "angry", "neutral", "anxious"],
    required: true,
  },
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Mood", moodSchema);
