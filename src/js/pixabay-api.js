import axios from "axios";

export default function getImagesByQuery(query) {
    const API_KEY = "51351700-57b4425fb1f1cd66a3797fddb";
    const BASE_URL = "https://pixabay.com/api/";
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    })
    return axios.get(`${BASE_URL}?${params}`)
	    .then(response => response.data.hits)
	    .catch(error => console.log(error))
}