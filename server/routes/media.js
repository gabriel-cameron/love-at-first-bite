// server/routes/media.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:endpoint', (req, res) => {
  const endpoint = req.params.endpoint.replace(/\/$/, '');
  const dirPath = path.join(__dirname, '../../public/media', endpoint);
  
  fs.readdir(dirPath, (err, files) => {
    if (err || !files || files.length === 0) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json({ filename: files[0] });
  });
});

module.exports = router;
