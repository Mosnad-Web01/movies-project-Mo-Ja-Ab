import React from "react";
import { ReusableSwiper } from "../Swiper/Swiper";
import { Api } from "@/lib/api";

const TVShowsSwiper = async () => {
  const api = new Api();
  const data = await api.get_latest_tv_shows();
  return <ReusableSwiper data={data.results} />;
};

export default TVShowsSwiper;
