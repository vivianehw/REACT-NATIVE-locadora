import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

// https://api.themoviedb.org/3/movie/popular?api_key=9155cee6f569cf089fde3f9540513492&language=pt-BR&page=1
// https://api.themoviedb.org/3/movie/550?api_key=9155cee6f569cf089fde3f9540513492
