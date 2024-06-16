import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add more specific API methods here if needed
export const signup = (data: unknown) => api.post("/users/signup", data);
export const login = (data: unknown) => api.post("/users/login", data);
export const getUsers = () => api.get("/users");
// Add other API methods as required
