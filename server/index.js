// server/index.js
const express = require('express');
const session = require('express-session');
const config = require('./config');
const recipeRoutes = require('./routes/recipes');

const app = express();

// Parse JSON bodies
app.use(express.json());

// Setup session middleware for volatile (in-memory) data
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);

// Mount the recipes routes
app.use('/api/recipes', recipeRoutes);

// Basic health check route
app.get('/', (req, res) => {
  res.send('API is running.');
});

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
