// backend/src/controllers/diagramController.js
const Diagram = require('../models/Diagram');

// Create a new diagram
exports.createDiagram = async (req, res, next) => {
  try {
    const { name, data } = req.body;
    const diagram = new Diagram({ name, data });
    await diagram.save();
    res.status(201).json(diagram);
  } catch (error) {
    next(error);
  }
};

// Get all diagrams
exports.getAllDiagrams = async (req, res, next) => {
  try {
    const diagrams = await Diagram.find().sort({ createdAt: -1 });
    res.status(200).json(diagrams);
  } catch (error) {
    next(error);
  }
};

// Get a single diagram by ID
exports.getDiagramById = async (req, res, next) => {
  try {
    const diagram = await Diagram.findById(req.params.id);
    if (!diagram) {
      return res.status(404).json({ message: 'Diagram not found' });
    }
    res.status(200).json(diagram);
  } catch (error) {
    next(error);
  }
};

// Update a diagram by ID
exports.updateDiagram = async (req, res, next) => {
  try {
    const { name, data } = req.body;
    const diagram = await Diagram.findByIdAndUpdate(
      req.params.id,
      { name, data, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!diagram) {
      return res.status(404).json({ message: 'Diagram not found' });
    }
    res.status(200).json(diagram);
  } catch (error) {
    next(error);
  }
};

// Delete a diagram by ID
exports.deleteDiagram = async (req, res, next) => {
  try {
    const diagram = await Diagram.findByIdAndDelete(req.params.id);
    if (!diagram) {
      return res.status(404).json({ message: 'Diagram not found' });
    }
    res.status(200).json({ message: 'Diagram deleted successfully' });
  } catch (error) {
    next(error);
  }
};
