import React from 'react';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import './Recipe.css';

const Recipe = () => {
  const recipe = {
    name: "Creamy Garlic Butter Chicken",
    image: "/butter-chicken.jpg", // ✅ Path from public folder
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
        <Typography variant="h4" className="recipe-title">
          {recipe.name}
        </Typography>

        <Typography variant="h5" className="section-title">Ingredients</Typography>
        <List>
          {recipe.ingredients.map((ingredient, index) => (
            <ListItem key={index} className="list-item">
              <ListItemText primary={ingredient} />
            </ListItem>
          ))}
        </List>

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
