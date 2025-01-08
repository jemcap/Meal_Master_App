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

export const fetchRecipes = async (query: string, mealType: string, diet: string, dishType: string) => {
    try {
        const response = await fetchApi.get('', {
            params: {
                type: "public",
                q: query,
                mealType: mealType,
                diet: diet,
                dishType: dishType
            }
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.error("Error fetching recipes", error.message)
        throw new Error(error.message)
    }
}