const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  ingredients: {
    type: [String],
    required: [true, 'Please add at least one ingredient']
  },
  instructions: {
    type: String,
    required: [true, 'Please add instructions']
  },
  cookingTime: {
    type: Number,
    required: [true, 'Please add cooking time in minutes']
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);