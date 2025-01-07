import React, { useState } from "react";
import { fetchRecipes } from "../../utils";
import { useRecipes } from "../../context/recipesContext";

const RecipeSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const { setRecipes } = useRecipes();

  const handleSearch = async () => {
    try {
      const response = await fetchRecipes(query, mealType);
      console.log(response);
      setRecipes(response.hits);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes"
      />
      <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RecipeSearch;
