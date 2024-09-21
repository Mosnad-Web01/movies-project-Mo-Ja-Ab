import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_APIKEY;

export const api_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: API_KEY,
  },
});
