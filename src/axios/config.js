import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://fake-server-projetoindividual.onrender.com/Produtos",
    headers: {
        "Content-Type": "application/json",
    }
});

export default blogFetch;