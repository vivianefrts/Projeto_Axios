import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://fake-server-projetoindividual.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    }
});

export default blogFetch;