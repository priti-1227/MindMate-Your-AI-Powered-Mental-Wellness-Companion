const express = require('express');
const router = express.Router();
const { addMood, getMoods } = require('../controllers/moodController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addMood);
router.get('/', auth, getMoods);

module.exports = router;
