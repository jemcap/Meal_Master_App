import axios from 'axios'

const apiUrl = import.meta.env.VITE_EDAMAM_API_URL
const apiKey = import.meta.env.VITE_EDAMAM_API_KEY
const apiHost = import.meta.env.VITE_EDAMAM_API_HOST

const fetchApi = axios.create({
    baseURL: apiUrl,
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
    }
})

export const fetchRecipes = async (query: string, mealType?: string, diet?: string, dishType?: string, cuisineType?: string, calories?: number) => {
    try {
        const params: any = {
            type: "public",
            random: true,
            q: query,
        };

        if (mealType) params.mealType = mealType;
        if (diet) params.diet = diet;
        if (dishType) params.dishType = dishType;
        if (cuisineType) params.cuisineType = cuisineType;
        if (calories) params.calories = `0-${calories}`;

        const response = await fetchApi.get('', { params });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes", error.message)
        throw new Error(error.message)
    }
}

export const fetchNextPage = async (nextLink: string) => {
    try {
        const response = await axios.get(nextLink)
        return response.data
    } catch (error) {
        console.error("Error fetching next page.", error.message)
        throw new Error(error.message)
    }
}