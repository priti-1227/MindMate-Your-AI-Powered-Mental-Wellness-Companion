const Journal = require("../models/Journal");

exports.createJournal = async (req, res) => {
  const { content } = req.body;
console.log("User ID from token:", req.userId);
  try {
    const newJournal = new Journal({
      user: req.userId  ,
      content,
    });
    await newJournal.save();
    res.status(201).json(newJournal);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating journal entry", error: error.message });
  }
};

exports.getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(journals);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching journals", error: error.message });
  }
};
