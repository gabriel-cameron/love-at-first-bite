// server/index.js
const express = require('express');
const session = require('express-session');
const config = require('./config');
const swipeRoutes = require('./routes/swipe');
const mediaRoutes = require('./routes/media');

const app = express();

// Disable ETag and set Cache-Control headers for all /api routes
app.set('etag', false);
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// Parse JSON bodies for incoming requests
app.use(express.json());

// Setup session middleware for tracking viewed and liked recipes
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);

// Mount API routes
app.use('/api/swipe', swipeRoutes);
app.use('/api/media', mediaRoutes);

// Serve static files from the public directory (e.g., images, HTML)
app.use(express.static('public'));

// Start the server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
