import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";

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
        <div
          key={uuidv4()}
          className="shadow-xl p-5 w-[500px] rounded-2xl hover:shadow-xl hover:shadow-orange-200 transition all 2s ease"
        >
          <Link
            key={uuidv4()}
            to={recipe.recipe?.url}
            target="_blank"
            className="shadow-xl p-2 h-fit"
          >
            <div className="relative group">
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                className="object-cover h-96 w-full rounded-md shadow-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-row items-center gap-2 w-[150px]">
                  <h1 className="text-white text-xl">Go to recipe</h1>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-sm flex-1"
                    fill="white"
                  >
                    <path
                      d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <div className=" h-36 justify-between gap-3 flex flex-col mt-5">
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
            <div className="flex flex-row justify-between items-center">
              <Link
                to={recipe.recipe.url}
                target="_blank"
                aria-label="Link to the recipe"
              >
                <PrimaryButton text="Go to recipe" />
              </Link>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                className="hover:cursor-pointer"
              >
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
              </svg>
            </div>
            <small className="text-gray-500">
              Source: {recipe.recipe.source}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipesContainer;
