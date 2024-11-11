// erd-backend/src/routes/diagram.js
const express = require('express');
const router = express.Router();

// Updated route
router.get('/diagrams', async (req, res) => {
  try {
    const diagrams = await Diagram.find();
    res.json(diagrams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;