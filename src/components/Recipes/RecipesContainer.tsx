import React from "react";
import { v4 as uuidv4 } from "uuid";

type Recipe = {
  image: string;
  label: string;
};

type RecipeProps = {
  recipes: Recipe[];
};

const RecipesContainer: React.FC<RecipeProps> = ({ recipes }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-between">
      {recipes.map((recipe) => (
        <div key={uuidv4()} className="mt-20 w-[300px]">
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            width={300}
            height={300}
            className="object-cover h-full rounded-md shadow-xl"
          />
          <div className=" h-20 justify-between flex flex-col">
            <h2 className="w-full font-bold">{recipe.recipe.label}</h2>
            <ul className="flex gap-2 flex-wrap text-sm">
              {recipe.recipe.cuisineType.map((type: string) => (
                <li
                  key={uuidv4()}
                  className="flex flex-row border-2 p-1 rounded-md border-pink-400 bg-pink-700 text-white capitalize"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipesContainer;
