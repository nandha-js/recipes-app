const Recipe = require('../models/Recipe');

// Create a new recipe
exports.createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({ success: true, data: recipe });
  } catch (err) {
    next(err);
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ success: true, count: recipes.length, data: recipes });
  } catch (err) {
    next(err);
  }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ success: false, error: 'Recipe not found' });
    }
    res.status(200).json({ success: true, data: recipe });
  } catch (err) {
    next(err);
  }
};

// Update a recipe
exports.updateRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!recipe) {
      return res.status(404).json({ success: false, error: 'Recipe not found' });
    }
    res.status(200).json({ success: true, data: recipe });
  } catch (err) {
    next(err);
  }
};

// Delete a recipe
exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ success: false, error: 'Recipe not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
