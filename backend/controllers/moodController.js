const Mood = require("../models/Mood");

exports.addMood = async (req, res) => {
  const { mood, note } = req.body;

  try {
    const newMood = new Mood({
      user: req.userId,
      mood,
      note,
    });
    await newMood.save();
    res.status(201).json(newMood);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error saving mood", error: error.message });
  }
};

exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.userId }).sort({ createdAt: -1 });
    res.status(200).json(moods);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching moods", error: error.message });
  }
};
