import React from "react";
import { ReusableSwiper } from "../Swiper/Swiper";
import { Api } from "@/lib/api";

const MoviesSwiper = async () => {
  const api = new Api();
  const data = (await api.get_latest_movies()).results;
  console.log(data);
  return <ReusableSwiper data={data} />;
};

export default MoviesSwiper;
