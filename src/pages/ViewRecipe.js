// src/pages/ViewRecipe.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewRecipe.css';

function ViewRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Dummy full recipe data; later, you'll fetch this via your API.
  const [recipe, setRecipe] = useState({
    id,
    photo: 'butter-chicken.jpg',
    name: 'Butter Chicken',
    rating: 4.5,
    allergens: 'Dairy',
    ingredients: ['Chicken', 'Butter', 'Cream', 'Tomato'],
    directions: 'Mix ingredients and cook over low heat.',
  });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="view-recipe-container">
      <button className="back-button" onClick={handleBack}>Back</button>
      <div className="recipe-details">
        <img src={recipe.photo} alt={recipe.name} className="recipe-photo" />
        <h2>{recipe.name}</h2>
        <p>Rating: {recipe.rating}</p>
        <p>Allergens: {recipe.allergens}</p>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
        <h3>Directions</h3>
        <p>{recipe.directions}</p>
      </div>
    </div>
  );
}

export default ViewRecipe;
