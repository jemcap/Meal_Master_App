import React, { useState } from "react";
import { fetchRecipes } from "../../utils";
import { useRecipes } from "../../context/recipesContext";
import SubmitButton from "../Button/SubmitButton";

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
    try {
      const response = await fetchRecipes(
        query,
        mealType,
        diet,
        dishType,
        cuisineType,
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
    <div className="flex gap-10 justify-between flex-wrap">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={!query ? "Search for recipes" : query}
        className="border-2"
      />
      <select
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
        className="border-2"
      >
        <option value="">Please select a meal type...</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="teatime">Teatime</option>
      </select>
      <select
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        className="border-2"
      >
        <option value="">Please select a diet...</option>
        <option value="balanced">Balanced</option>
        <option value="high-protein">High Protein</option>
        <option value="low-carb">Low Carb</option>
        <option value="low-fat">Low Fat</option>
        <option value="low-sodium">Low Sodium</option>
      </select>
      <select
        value={cuisineType}
        onChange={(e) => setCuisineType(e.target.value)}
        className="border-2 capitalize"
      >
        <option value="">Please select a cuisine...</option>
        <option value="american">American</option>
        <option value="chinese">chinese</option>
        <option value="british">british</option>
        <option value="caribbean">caribbean</option>
        <option value="french">french</option>
        <option value="greek">greek</option>
        <option value="indian">indian</option>
        <option value="italian">italian</option>
        <option value="japanese">japanese</option>
        <option value="korean">korean</option>
        <option value="mediterranean">mediterranean</option>
        <option value="mexican">mexican</option>
        <option value="nordic">nordic</option>
        <option value="middle eastern">middle eastern</option>
        <option value="world">world</option>
      </select>
      <select
        value={dishType}
        onChange={(e) => setDishType(e.target.value)}
        className="border-2"
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

      <div className="form-control w-1/2">
        <label className="capitalize flex justify-between label cursor-pointer">
          Calories:
          <span>{calories}</span>
        </label>
        <input
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
