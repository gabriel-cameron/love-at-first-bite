import React from 'react';
import { Typography, List, ListItem, ListItemText, Box, Rating } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import './Recipe.css';

const Recipe = () => {
  const recipe = {
    name: "Creamy Garlic Butter Chicken",
    image: "/butter-chicken.jpg", // ✅ Path from public folder
    price: 12.99, // Total price
    servings: 4, // Number of servings
    rating: 4.5, // Out of 5
    cookTime: "30 minutes", // Cook time
    ingredients: [
      "2 boneless chicken breasts",
      "3 cloves garlic, minced",
      "1 cup heavy cream",
      "1/2 cup chicken broth",
      "1/4 cup parmesan cheese",
      "2 tbsp butter",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
      "Fresh parsley (for garnish)"
    ],
    instructions: [
      "Heat olive oil and butter in a pan over medium heat.",
      "Season chicken with salt and pepper, then cook for 5-6 minutes per side until golden brown. Remove and set aside.",
      "In the same pan, sauté garlic until fragrant.",
      "Pour in chicken broth and heavy cream. Stir in parmesan cheese.",
      "Return chicken to the pan and simmer for 5 minutes until sauce thickens.",
      "Garnish with parsley and serve hot."
    ]
  };

  return (
    <Box className="recipe-container">
      {/* Full-width Image */}
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />

      {/* Recipe Content */}
      <Box className="recipe-content">
        {/* Recipe Name */}
        <Typography variant="h4" className="recipe-title">
          {recipe.name}
        </Typography>

        {/* Left-aligned Recipe Details */}
        <Box className="recipe-details">
          <Typography variant="h6" className="recipe-price">
            💰 ${recipe.price.toFixed(2)} • ${ (recipe.price / recipe.servings).toFixed(2) } per serving
          </Typography>
          <Box className="recipe-rating">
            <Rating value={recipe.rating} precision={0.5} readOnly />
            <Typography variant="body1" className="rating-text">
              {recipe.rating}/5
            </Typography>
          </Box>
          <Typography variant="h6" className="recipe-time">
            ⏱ Cook Time: {recipe.cookTime}
          </Typography>
        </Box>

        {/* Ingredients List */}
        <Typography variant="h5" className="section-title">Ingredients</Typography>
        <List>
          {recipe.ingredients.map((ingredient, index) => (
            <ListItem key={index} className="list-item">
              <ListItemText primary={ingredient} />
            </ListItem>
          ))}
        </List>

        {/* Cooking Instructions */}
        <Typography variant="h5" className="section-title">Instructions</Typography>
        <List>
          {recipe.instructions.map((step, index) => (
            <ListItem key={index} className="list-item">
              <ListItemText primary={`${index + 1}. ${step}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Recipe;
