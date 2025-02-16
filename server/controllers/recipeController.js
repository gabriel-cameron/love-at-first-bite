// server/controllers/recipeController.js
const db = require('../db');

// Retrieve recipes with optional filters and exclusion of swiped recipes
exports.getRecipes = async (req, res) => {
  try {
    let conditions = [];
    let values = [];
    let index = 1;
    
    // Exclude recipes that have already been swiped (yes or no)
    if (req.session.swipedRecipes && req.session.swipedRecipes.length > 0) {
      const placeholders = req.session.swipedRecipes.map(() => `$${index++}`).join(', ');
      conditions.push(`id NOT IN (${placeholders})`);
      values.push(...req.session.swipedRecipes);
    }
    
    // Apply dietary restriction filter if provided (e.g., vegan, gluten-free)
    if (req.query.diet) {
      conditions.push(`diet = $${index++}`);
      values.push(req.query.diet);
    }
    
    // Apply type filter if provided (e.g., breakfast, lunch)
    if (req.query.type) {
      conditions.push(`type = $${index++}`);
      values.push(req.query.type);
    }
    
    // Apply ingredient filter if provided (using a case-insensitive search)
    if (req.query.ingredient) {
      conditions.push(`ingredients ILIKE $${index++}`);
      values.push(`%${req.query.ingredient}%`);
    }
    
    let query = 'SELECT * FROM recipes';
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    
    const result = await db.query(query, values);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve a specific recipe by ID (for full recipe view)
exports.getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM recipes WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching recipe by id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Handle "like" action: record recipe in library and mark as swiped
exports.likeRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Initialize session arrays if they don't exist
    if (!req.session.likedRecipes) {
      req.session.likedRecipes = [];
    }
    if (!req.session.swipedRecipes) {
      req.session.swipedRecipes = [];
    }
    
    // Add to liked recipes if not already present
    if (!req.session.likedRecipes.includes(id)) {
      req.session.likedRecipes.push(id);
    }
    
    // Record the recipe as swiped (to avoid showing it again)
    if (!req.session.swipedRecipes.includes(id)) {
      req.session.swipedRecipes.push(id);
    }
    
    res.json({ likedRecipes: req.session.likedRecipes });
  } catch (error) {
    console.error('Error liking recipe:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Handle "no" action: simply mark the recipe as swiped so it won’t appear again
exports.dislikeRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Initialize the swiped recipes array in the session if needed
    if (!req.session.swipedRecipes) {
      req.session.swipedRecipes = [];
    }
    
    if (!req.session.swipedRecipes.includes(id)) {
      req.session.swipedRecipes.push(id);
    }
    
    res.json({ swipedRecipes: req.session.swipedRecipes });
  } catch (error) {
    console.error('Error disliking recipe:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// server/controllers/recipeController.js

// ...

// Retrieve liked recipes from session and query the DB for details.
exports.getLikedRecipes = async (req, res) => {
    try {
      if (!req.session.likedRecipes || req.session.likedRecipes.length === 0) {
        return res.json([]);
      }
      const query = 'SELECT * FROM recipes WHERE id = ANY($1::int[])';
      const result = await db.query(query, [req.session.likedRecipes]);
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching liked recipes:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  