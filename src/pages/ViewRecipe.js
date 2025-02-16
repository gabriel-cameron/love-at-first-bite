import React from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../components/Recipe/Recipe';

const ViewRecipe = () => {
  const { id } = useParams(); // Get recipe ID from URL

  return (
    <Recipe />
  );
  
};

export default ViewRecipe;
