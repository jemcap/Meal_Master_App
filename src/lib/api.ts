import axios from "axios";

export const fetchSuggestedMeals = async (ingredients: string[]) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
        ","
      )}&apiKey=${
        import.meta.env.VITE_SPOONACULAR_API_KEY
      }`
    );
    return response.data;
  } catch (error) {
    console.error(error)
  }
};
