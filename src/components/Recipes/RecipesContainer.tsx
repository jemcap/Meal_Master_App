import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

type Recipe = {
  image: string;
  label: string;
};

type RecipeProps = {
  recipes: Recipe[];
};

const RecipesContainer: React.FC<RecipeProps> = ({ recipes }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-between my-20 ">
      {recipes.map((recipe) => (
        <Link
          key={uuidv4()}
          to={recipe.recipe?.url}
          target="_blank"
          className="shadow-xl p-2 h-fit hover:shadow-2xl hover:shadow-orange-300 transition all 2s ease"
        >
          <div key={uuidv4()} className=" w-[500px]">
            <img
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              className="object-cover h-96 w-full rounded-md shadow-xl"
            />
            <div className=" h-36 justify-between flex flex-col mt-5">
              <ul className="flex gap-2 flex-wrap text-sm underline">
                {recipe.recipe.cuisineType.map((type: string) => (
                  <li
                    key={uuidv4()}
                    className="flex flex-row text-gray-500 capitalize"
                  >
                    {type}
                  </li>
                ))}
              </ul>
              <h2 className="w-full font-bold  h-full text-xl">
                {recipe.recipe.label}
              </h2>
              <small className="text-gray-500">
                Source: {recipe.recipe.source}
              </small>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipesContainer;
