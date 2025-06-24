const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  ingredients: {
    type: [String],
    required: [true, 'Ingredients are required'],
  },
  instructions: {
    type: String,
    required: [true, 'Instructions are required'],
  },
  cookingTime: {
    type: Number,
    required: true,
    min: [1, 'Cooking time must be at least 1 minute'],
  },
  difficulty: {
    type: String,
    required: true,
    enum: {
      values: ['Easy', 'Medium', 'Hard'],
      message: 'Difficulty must be Easy, Medium, or Hard',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
