import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f5c1e4e8c9bc06f72285763f54b3f58e',
        language: 'es-ES'
    }
})

export default movieDB;