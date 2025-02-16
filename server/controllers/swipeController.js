// server/controllers/swipeController.js
const db = require('../db');

async function getNextRecipe(viewedEndpoints, filters) {
  let query = `
    SELECT endpoint, name, calories, protein, fat
    FROM recipes
  `;
  const conditions = [];
  const values = [];

  if (viewedEndpoints.length > 0) {
    const placeholders = viewedEndpoints.map((_, i) => `$${i + 1}`).join(', ');
    conditions.push(`endpoint NOT IN (${placeholders})`);
    values.push(...viewedEndpoints);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }
  query += ' LIMIT 1';

  // Log the query and values
  console.log('SQL Query:', query);
  console.log('Query Values:', values);

  const result = await db.query(query, values);
  
  // Log the result
  console.log('Database returned:', result.rows);

  return result.rows.length ? result.rows[0] : null;
}

exports.getNext = async (req, res) => {
  try {
    if (!req.session.viewedEndpoints) {
      req.session.viewedEndpoints = [];
    }
    if (!req.session.filters) {
      req.session.filters = {};
    }
    const nextRecipe = await getNextRecipe(req.session.viewedEndpoints, req.session.filters);
    return res.json(nextRecipe);
  } catch (error) {
    console.error('Error in getNext:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.likeRecipe = async (req, res) => {
  try {
    const { endpoint } = req.body;
    if (!endpoint) {
      return res.status(400).json({ error: 'Missing endpoint in request body' });
    }
    if (!req.session.viewedEndpoints) req.session.viewedEndpoints = [];
    if (!req.session.likedEndpoints) req.session.likedEndpoints = [];
    if (!req.session.filters) req.session.filters = {};

    if (!req.session.viewedEndpoints.includes(endpoint)) {
      req.session.viewedEndpoints.push(endpoint);
    }
    if (!req.session.likedEndpoints.includes(endpoint)) {
      req.session.likedEndpoints.push(endpoint);
    }

    const nextRecipe = await getNextRecipe(req.session.viewedEndpoints, req.session.filters);
    return res.json(nextRecipe);
  } catch (error) {
    console.error('Error in likeRecipe:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.dislikeRecipe = async (req, res) => {
  try {
    const { endpoint } = req.body;
    if (!endpoint) {
      return res.status(400).json({ error: 'Missing endpoint in request body' });
    }
    if (!req.session.viewedEndpoints) req.session.viewedEndpoints = [];
    if (!req.session.filters) req.session.filters = {};

    if (!req.session.viewedEndpoints.includes(endpoint)) {
      req.session.viewedEndpoints.push(endpoint);
    }

    const nextRecipe = await getNextRecipe(req.session.viewedEndpoints, req.session.filters);
    return res.json(nextRecipe);
  } catch (error) {
    console.error('Error in dislikeRecipe:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
