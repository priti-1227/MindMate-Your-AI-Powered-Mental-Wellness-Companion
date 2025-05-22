const express = require("express");
const router = express.Router();
const {
  createJournal,
  getJournals,
} = require("../controllers/journalController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createJournal);
router.get("/", auth, getJournals);

module.exports = router;
