import axios from "axios";

const API_URL = "https://buzzboard-server.vercel.app/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = (data: {
  name: string;
  email: string;
  mobileNo: string;
  password: string;
}) => api.post("/users/signup", data);

export const login = (data: { email: string; password: string }) =>
  api.post("/users/login", data);
