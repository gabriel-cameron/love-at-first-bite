// server/routes/recipes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/swipeController');

router.get('/', recipeController.getRecipes);
router.get('/library', recipeController.getLikedRecipes);
router.get('/:endpoint', recipeController.getRecipeByEndpoint);
router.post('/:endpoint/like', recipeController.likeRecipe);
router.post('/:endpoint/no', recipeController.dislikeRecipe);

module.exports = router;


// GET the next unviewed recipe
router.get('/', swipeController.getNext);

// POST like a recipe (returns the next one)
router.post('/like', swipeController.likeRecipe);

// POST dislike a recipe (returns the next one)
router.post('/no', swipeController.dislikeRecipe);

module.exports = router;
