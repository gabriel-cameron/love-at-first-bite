// src/pages/Swipe.js
import React, { useState } from 'react';
import './Swipe.css';

function Swipe() {
  // Dummy recipe data—later you'll fetch this from your API.
  const [recipe, setRecipe] = useState({
    id: 1,
    photo: 'butter-chicken.jpg', // Assumes the image is in your public folder
    name: 'Butter Chicken',
    rating: 4.5,
    allergens: 'Dairy',
  });

  const handleYes = () => {
    // TODO: Call API to record "yes" and fetch the next recipe.
    console.log('Yes clicked for recipe', recipe.id);
  };

  const handleNo = () => {
    // TODO: Call API to record "no" and fetch the next recipe.
    console.log('No clicked for recipe', recipe.id);
  };

  const handleView = () => {
    // TODO: Navigate to the full recipe page.
    console.log('View recipe', recipe.id);
  };

  return (
    <div className="swipe-container">
      <div className="recipe-card">
        <img src={recipe.photo} alt={recipe.name} className="recipe-photo" />
        <h2>{recipe.name}</h2>
        <p>Rating: {recipe.rating}</p>
        <p>Allergens: {recipe.allergens}</p>
      </div>
      <div className="swipe-buttons">
        <button className="no-button" onClick={handleNo}>No</button>
        <button className="view-button" onClick={handleView}>+</button>
        <button className="yes-button" onClick={handleYes}>Yes</button>
      </div>
    </div>
  );
}

export default Swipe;
