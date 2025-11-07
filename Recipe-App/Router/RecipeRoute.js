const express = require('express');
const router = express.Router();
const Recipe = require('../Model/Recipe');
const User = require('../Model/User');
const { verifyToken } = require('../Middleware/AuthMiddleware');

// All recipes
router.get('/', verifyToken, async (req, res) => {
  const recipes = await Recipe.find().populate('author');
  res.render('recipeList', { recipes, user: req.user });
});

// User-specific recipes
router.get('/my', verifyToken, async (req, res) => {
  const recipes = await Recipe.find({ author: req.user.id });
  res.render('myRecipes', { recipes });
});

// Add recipe form
router.get('/new', verifyToken, (req, res) => res.render('recipeForm'));

// Create recipe
router.post('/new', verifyToken, async (req, res) => {
  const recipe = await Recipe.create({ ...req.body, author: req.user.id });
  await User.findByIdAndUpdate(req.user.id, { $push: { recipes: recipe._id } });
  res.redirect('/recipes/my');
});

module.exports = router;
