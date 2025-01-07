import React, { useState } from "react";
import RecipeSearch from "../components/Form/RecipeSearch";
import RecipesContainer from "../components/Recipes/RecipesContainer";
import { useRecipes } from "../context/recipesContext";

const Recipes: React.FC = () => {
  const { recipes } = useRecipes();
  return (
    <div className="mt-32 align-elements">
      <RecipeSearch />
      {recipes.length === 0 ? (
        <p className="text-center text-gray-500">
          x Search for recipes to display results.
        </p>
      ) : (
        <RecipesContainer recipes={recipes} />
      )}
    </div>
  );
};

export default Recipes;
