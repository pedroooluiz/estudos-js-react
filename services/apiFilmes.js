import token from "@/configToken";
import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer ' + token
    }
})

//entrar em configToken e colocar como .js

export default apiFilmes