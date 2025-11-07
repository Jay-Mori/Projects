const express = require('express');
const router = express.Router();
const Comment = require('../Model/Comment');
const Recipe = require('../Model/Recipe');
const { verifyToken } = require('../Middleware/AuthMiddleware');

router.post('/:recipeId', verifyToken, async (req, res) => {
  const comment = await Comment.create({
    text: req.body.text,
    author: req.user.id,
    recipe: req.params.recipeId
  });
  await Recipe.findByIdAndUpdate(req.params.recipeId, { $push: { comments: comment._id } });
  res.redirect('/recipes');
});

module.exports = router;
