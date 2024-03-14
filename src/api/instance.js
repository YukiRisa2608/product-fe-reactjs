// Create new instance of axios client

import axios from "axios";

export const instance = axios.create(
    { baseURL: "http://localhost:8081/api.com/v2/" }
)