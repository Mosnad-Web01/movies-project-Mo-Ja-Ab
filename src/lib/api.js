import { api_instance } from "./api_instance";

export class Api {
  constructor() {}

  async get_latest_movies() {
    try {
      const response = await api_instance({
        url: "trending/movie/day",
        method: "GET",
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async get_genres() {
    try {
      const response = await api_instance({
        url: "genre/movie/list",
        method: "GET",
        params: {
          language: "en-US",
        },
      });
      const genres = response.data.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});

      return genres;
    } catch (error) {
      throw error;
    }
  }

  async get_latest_tv_shows() {
    try {
       const response = await api_instance({
         url: "trending/tv/week",
         method: "GET",
       });
       return response.data;
    } catch {
      throw error;
    }
  }
}
