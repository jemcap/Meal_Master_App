import React, { useState } from "react";
import RecipeSearch from "../components/Form/RecipeSearch";
import RecipesContainer from "../components/Recipes/RecipesContainer";

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="mt-32 align-elements">
      <RecipeSearch setRecipes={setRecipes} />
      {recipes.length === 0 ? (
        <p className="text-center text-gray-500">
          Search for recipes to display results.
        </p>
      ) : (
        <RecipesContainer recipes={recipes} />
      )}
    </div>
  );
};

export default Recipes;
