import axios from 'axios'

const apiUrl = import.meta.env.VITE_EDAMAM_API_URL
const apiKey = import.meta.env.VITE_EDAMAM_API_KEY
const apiHost = import.meta.env.VITE_EDAMAM_API_HOST

export const fetchApi = axios.create({
    baseURL: apiUrl,
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
    }
})