// src/pages/Swipe.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Swipe.css';

function Swipe() {
  const [recipe, setRecipe] = useState(null);
  const [imageName, setImageName] = useState(null);
  const navigate = useNavigate();

  const loadNextRecipe = async () => {
    try {
      // Append a cache-busting query parameter
      const response = await fetch('/api/swipe?t=' + Date.now(), { cache: 'no-store' });
      const data = await response.json();
      setRecipe(data);
      // Optionally, you can log the response for debugging:
      console.log('Fetched recipe:', data);
    } catch (err) {
      console.error('Error loading next recipe:', err);
    }
  };

  useEffect(() => {
    loadNextRecipe();
  }, []);

  useEffect(() => {
    const fetchImageFilename = async () => {
      if (recipe && recipe.endpoint) {
        try {
          const response = await fetch(`/api/media/${encodeURIComponent(recipe.endpoint)}`);
          const data = await response.json();
          setImageName(data.filename);
        } catch (err) {
          console.error('Error fetching image filename:', err);
        }
      }
    };
    fetchImageFilename();
  }, [recipe]);

  const handleNo = async () => {
    if (!recipe) return;
    try {
      const response = await fetch('/api/swipe/no', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ endpoint: recipe.endpoint }),
      });
      const next = await response.json();
      setRecipe(next);
      setImageName(null);
    } catch (err) {
      console.error('Error disliking recipe:', err);
    }
  };

  const handleYes = async () => {
    if (!recipe) return;
    try {
      const response = await fetch('/api/swipe/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ endpoint: recipe.endpoint }),
      });
      const next = await response.json();
      setRecipe(next);
      setImageName(null);
    } catch (err) {
      console.error('Error liking recipe:', err);
    }
  };

  const handleInfo = () => {
    if (recipe) {
      navigate(`/recipe/${recipe.endpoint}`);
    }
  };

  if (recipe === null) {
    return (
      <div className="swipe-container">
        <p>No more recipes available.</p>
      </div>
    );
  }

  const cleanEndpoint = recipe.endpoint.replace(/\/$/, '');
  const imageSrc = imageName ? `/media/${cleanEndpoint}/${imageName}` : '';

  return (
    <div className="swipe-container">
      {imageSrc ? (
        <img className="swipe-image" src={imageSrc} alt={recipe.name} />
      ) : (
        <div className="swipe-image placeholder">Loading image...</div>
      )}
      <h2 className="swipe-recipe-name">{recipe.name}</h2>
      <table className="swipe-macros-table">
        <thead>
          <tr>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{recipe.calories}</td>
            <td>{recipe.protein}</td>
            <td>{recipe.fat}</td>
          </tr>
        </tbody>
      </table>
      <div className="swipe-buttons">
        <button className="swipe-button no-button" onClick={handleNo}>
          ✕
        </button>
        <button className="swipe-button info-button" onClick={handleInfo}>
          +
        </button>
        <button className="swipe-button yes-button" onClick={handleYes}>
          ✓
        </button>
      </div>
    </div>
  );
}

export default Swipe;
