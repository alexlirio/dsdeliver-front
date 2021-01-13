import axios from "axios";

const API_URL = "http://127.0.0.1:8081/dsdeliver";

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}