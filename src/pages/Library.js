// src/pages/Library.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Library.css';

function Library() {
  // Dummy liked recipes—later you'll integrate this with session data or API.
  const [likedRecipes, setLikedRecipes] = useState([
    { id: 1, name: 'Butter Chicken', photo: 'butter-chicken.jpg' },
    // Add more liked recipes as needed.
  ]);

  return (
    <div className="library-container">
      <h2>Library</h2>
      <div className="recipe-grid">
        {likedRecipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-tile">
            <img src={recipe.photo} alt={recipe.name} className="tile-photo" />
            <p>{recipe.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Library;
