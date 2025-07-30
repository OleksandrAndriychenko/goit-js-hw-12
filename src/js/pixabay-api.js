import axios from "axios";

export default async function getImagesByQuery(query, page) {
    const API_KEY = "51351700-57b4425fb1f1cd66a3797fddb";
    const BASE_URL = "https://pixabay.com/api/";
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: 15,
    });
    try {
        const response = await axios.get(`${BASE_URL}?${params}`);
        return response.data;
        
    }
    catch (er) {
        console.error("Помилка при отриманні зображень:", error);
    }
};
