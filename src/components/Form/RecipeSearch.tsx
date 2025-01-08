import React, { useState } from "react";
import { fetchRecipes } from "../../utils";
import { useRecipes } from "../../context/recipesContext";

const RecipeSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [diet, setDiet] = useState("");
  const [dishType, setDishType] = useState("");
  const { setRecipes } = useRecipes();

  const handleSearch = async () => {
    try {
      const response = await fetchRecipes(query, mealType, diet, dishType);
      console.log(response);
      setRecipes(response.hits);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="flex gap-10">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={!query ? "Search for recipes" : query}
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
      <select value={diet} onChange={(e) => setDiet(e.target.value)}>
        <option value="">Please select a diet...</option>
        <option value="balanced">Balanced</option>
        <option value="high-protein">High Protein</option>
        <option value="low-carb">Low Carb</option>
        <option value="low-fat">Low Fat</option>
        <option value="low-sodium">Low Sodium</option>
      </select>
      <select value={dishType} onChange={(e) => setDishType(e.target.value)}>
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
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RecipeSearch;
