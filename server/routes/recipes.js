// server/routes/recipes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.getRecipes);
router.get('/library', recipeController.getLikedRecipes);
router.get('/:endpoint', recipeController.getRecipeByEndpoint);
router.post('/:endpoint/like', recipeController.likeRecipe);
router.post('/:endpoint/no', recipeController.dislikeRecipe);

module.exports = router;
