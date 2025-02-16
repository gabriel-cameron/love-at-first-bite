// server/routes/swipe.js
const express = require('express');
const router = express.Router();
const swipeController = require('../controllers/swipeController');

router.get('/', swipeController.getNext);
router.post('/like', swipeController.likeRecipe);
router.post('/no', swipeController.dislikeRecipe);

module.exports = router;
