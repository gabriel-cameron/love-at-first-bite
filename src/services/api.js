// src/services/api.js
const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export async function fetchRecipes(filters = {}) {
  const queryParams = new URLSearchParams(filters).toString();
  const response = await fetch(`${API_BASE_URL}/api/recipes?${queryParams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  return response.json();
}

export async function fetchRecipeById(id) {
  const response = await fetch(`${API_BASE_URL}/api/recipes/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipe details');
  }
  return response.json();
}

export async function likeRecipe(id) {
  const response = await fetch(`${API_BASE_URL}/api/recipes/${id}/like`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Failed to like recipe');
  }
  return response.json();
}

export async function dislikeRecipe(id) {
  const response = await fetch(`${API_BASE_URL}/api/recipes/${id}/no`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Failed to dislike recipe');
  }
  return response.json();
}

export async function fetchLikedRecipes() {
  const response = await fetch(`${API_BASE_URL}/api/recipes/library`);
  if (!response.ok) {
    throw new Error('Failed to fetch liked recipes');
  }
  return response.json();
}
