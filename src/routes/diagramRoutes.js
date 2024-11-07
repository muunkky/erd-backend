// backend/src/routes/diagramRoutes.js
const express = require('express');
const router = express.Router();
const {
  createDiagram,
  getAllDiagrams,
  getDiagramById,
  updateDiagram,
  deleteDiagram,
} = require('../controllers/diagramController');

// @route   POST /api/diagrams
// @desc    Create a new diagram
// @access  Public (since authentication is ignored)
router.post('/', createDiagram);

// @route   GET /api/diagrams
// @desc    Get all diagrams
// @access  Public
router.get('/', getAllDiagrams);

// @route   GET /api/diagrams/:id
// @desc    Get a diagram by ID
// @access  Public
router.get('/:id', getDiagramById);

// @route   PUT /api/diagrams/:id
// @desc    Update a diagram by ID
// @access  Public
router.put('/:id', updateDiagram);

// @route   DELETE /api/diagrams/:id
// @desc    Delete a diagram by ID
// @access  Public
router.delete('/:id', deleteDiagram);

module.exports = router;
