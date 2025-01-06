import axios from 'axios'

const productionUrl = 'edamam-recipe-search.p.rapidapi.com/api/recipes/v2'

export const fetchApi = axios.create({
    baseURL: productionUrl,
})