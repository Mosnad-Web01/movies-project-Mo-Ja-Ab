import React from "react";
import HeroSplide from "../Swiper/HeroSwiper";
import { Api } from "@/lib/api";

const MainSwiper = async () => {
  const api = new Api();
  const data = await api.get_latest_movies();
  const genres = await api.get_genres();
  return <HeroSplide data={data.results} genres={genres}/>;
};

export default MainSwiper;
