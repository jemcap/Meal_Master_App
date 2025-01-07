import React from "react";

type Recipe = {
  image: string;
  label: string;
};

type RecipeProps = {
  recipes: Recipe[];
};

const RecipesContainer: React.FC<RecipeProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.recipe.label}</h2>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </div>
      ))}
    </div>
  );
};

export default RecipesContainer;
