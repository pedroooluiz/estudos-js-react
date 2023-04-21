import token from "@/configTolken";
import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer ' + token
    }
})

export default apiFilmes