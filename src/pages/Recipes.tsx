import React from "react";
import RecipeSearch from "../components/Form/RecipeSearch";
import RecipesContainer from "../components/Recipes/RecipesContainer";
import { useRecipes } from "../context/recipesContext";
import { fetchNextPage } from "../utils";

const Recipes: React.FC = () => {
  const { recipes, setRecipes, nextLink, setNextLink } = useRecipes();

  const handleLoadRecipes = async () => {
    if (nextLink) {
      try {
        const response = await fetchNextPage(nextLink);
        setRecipes((prevRecipes) => [...prevRecipes, ...response.hits]);
        setNextLink(response._links?.next?.href || null);
      } catch (error) {
        console.error("Error fetching next page", error.message);
        throw new Error(error.message);
      }
    }
  };
  return (
    <div className="mt-32 align-elements">
      <RecipeSearch />
      {recipes.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          Search for recipes to display results.
        </p>
      ) : (
        <>
          <div className="flex flex-col">
            <RecipesContainer recipes={recipes} />

            {nextLink && (
              <div className="text-center mt-36 mb-20">
                <button
                  onClick={handleLoadRecipes}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Recipes;
