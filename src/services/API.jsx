import axios from "axios";

const API_KEY = "27774499-f7de8e2f5f5de826deb07ebe7";
axios.defaults.baseURL = "https://pixabay.com/api/";

async function searchPhotos(nextName, page) {

    const response = await axios.get(`?key=${API_KEY}&q=${nextName}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`);
 return response.data;
}

export default searchPhotos;