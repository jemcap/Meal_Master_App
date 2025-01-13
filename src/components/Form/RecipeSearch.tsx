import React, { useState } from "react";
import { fetchRecipes } from "../../utils";
import { useRecipes } from "../../context/recipesContext";
import SubmitButton from "../Button/SubmitButton";
import { toast } from "react-toastify";

const RecipeSearch: React.FC = () => {
  const step = 100;
  const maxCalories = 3000;

  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [diet, setDiet] = useState("");
  const [dishType, setDishType] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [calories, setCalories] = useState<number | null>(3000);

  const { setRecipes, setNextLink } = useRecipes();

  const handleSearch = async () => {
    if (!query && !mealType && !diet && !dishType && !cuisineType) {
      toast.error("Please input in the fields.");
      return;
    }
    try {
      const response = await fetchRecipes(
        query,
        mealType ?? null,
        diet ?? null,
        dishType ?? null,
        cuisineType ?? null,
        calories ?? 0
      );
      console.log(response);
      setRecipes(response.hits);
      setNextLink(response._links?.next?.href || null);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="flex gap-10 justify-center lg:justify-between flex-wrap">
      <div className="form-group max-lg:w-full border-2">
        <label htmlFor="query" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes"
        />
      </div>
      <div className="form-group max-lg:w-full border-2">
        <label htmlFor="mealType" className="sr-only">
          Meal Type
        </label>
        <select
          id="mealType"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
        >
          <option value="">Please select a meal type...</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="teatime">Teatime</option>
        </select>
      </div>
      <div className="form-group max-lg:w-full border-2">
        <label htmlFor="diet" className="sr-only">
          Diet
        </label>
        <select
          id="diet"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
        >
          <option value="">Please select a diet...</option>
          <option value="balanced">Balanced</option>
          <option value="high-protein">High Protein</option>
          <option value="low-carb">Low Carb</option>
          <option value="low-fat">Low Fat</option>
          <option value="low-sodium">Low Sodium</option>
        </select>
      </div>
      <div className="form-group max-lg:w-full border-2">
        <label htmlFor="cuisineType" className="sr-only">
          Cuisine Type
        </label>
        <select
          id="cuisineType"
          value={cuisineType}
          onChange={(e) => setCuisineType(e.target.value)}
        >
          <option value="">Please select a cuisine...</option>
          <option value="american">American</option>
          <option value="chinese">Chinese</option>
          <option value="british">British</option>
          <option value="caribbean">Caribbean</option>
          <option value="french">French</option>
          <option value="greek">Greek</option>
          <option value="indian">Indian</option>
          <option value="italian">Italian</option>
          <option value="japanese">Japanese</option>
          <option value="korean">Korean</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="mexican">Mexican</option>
          <option value="nordic">Nordic</option>
          <option value="middle eastern">Middle Eastern</option>
        </select>
      </div>
      <div className="form-group max-lg:w-full border-2">
        <label htmlFor="dishType" className="sr-only">
          Dish Type
        </label>
        <select
          id="dishType"
          value={dishType}
          onChange={(e) => setDishType(e.target.value)}
        >
          <option value="">Please select a dish type...</option>
          <option value="biscuits-and-cookies">Biscuits and cookies</option>
          <option value="bread">Bread</option>
          <option value="cereals">Cereals</option>
          <option value="condiments-and-sauces">Condiments and Sauces</option>
          <option value="desserts">Desserts</option>
          <option value="drinks">Drinks</option>
          <option value="main-course">Main course</option>
          <option value="pancake">Pancake</option>
          <option value="preps">Preps</option>
          <option value="preserve">Preserve</option>
          <option value="salad">Salad</option>
          <option value="sandwiches">Sandwiches</option>
          <option value="side-dish">Side Dish</option>
          <option value="soup">Soup</option>
          <option value="starter">Starter</option>
          <option value="sweets">Sweets</option>
        </select>
      </div>

      <div className="form-control w-1/2 max-lg:w-full">
        <label
          htmlFor="calories"
          className="capitalize flex justify-between label cursor-pointer"
        >
          Calories:
          <span>{calories}</span>
        </label>
        <input
          id="calories"
          type="range"
          min={0}
          max={maxCalories}
          value={calories ?? 0}
          onChange={(e) => setCalories(Number(e.target.value))}
          className="w-full"
          step={step}
        />
        <div className="w-full flex justify-between text-xs px-2 mt-2">
          <span className="font-bold text-md">0</span>
          <span className="font-bold text-md">{maxCalories}</span>
        </div>
      </div>
      <SubmitButton type="button" text="Search" handleClick={handleSearch} />
    </div>
  );
};

export default RecipeSearch;
