// src/pages/Filters.js
import React from 'react';
import './Filters.css';

function Filters() {
  return (
    <div className="filters-container">
      <h2>Filters</h2>
      <div className="filter-item">
        <label htmlFor="diet">Dietary Restrictions:</label>
        <select id="diet">
          <option value="">Any</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
          {/* More options as needed */}
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="type">Type:</label>
        <select id="type">
          <option value="">Any</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          {/* More options as needed */}
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="ingredient">Ingredient:</label>
        <select id="ingredient">
          <option value="">Any</option>
          <option value="chicken">Chicken</option>
          <option value="beef">Beef</option>
          <option value="vegetable">Vegetable</option>
          {/* More options as needed */}
        </select>
      </div>
    </div>
  );
}

export default Filters;
