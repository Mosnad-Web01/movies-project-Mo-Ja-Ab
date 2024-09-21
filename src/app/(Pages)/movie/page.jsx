<<<<<<< HEAD
"use client"
import React, { useState } from "react"
import TrendingMovies from "@/app/APIFetch/weekMovies"
import PopularMoviesAPI from "@/app/APIFetch/todayMoviesAPI"

const MoviesPage = ({ movie }) => {
  const [selectedAPI, setSelectedAPI] = useState("popular")

  const handleAPIChange = (apiType) => {
    setSelectedAPI(apiType)
  }

  return (
    <div className="bg-background">
      <div className="flex items-center justify-center gap-x-3">
        <h1 className="text-2xl text-center cursor-pointer text-foreground font-Righeous">
          TRENDING:{" "}
        </h1>
        <h1
          className={`text-2xl text-center cursor-pointer text-foreground hover:text-orange-600 ${
=======
"use client";
import React, { useState } from "react";
import TrendingMovies from "@/app/APIFetch/weekMovies";
import PopularMoviesAPI from "@/app/APIFetch/todayMoviesAPI";
import { NavBar } from "@/components/component/nav-bar";

const MoviesPage = ({ movie }) => {
  const [selectedAPI, setSelectedAPI] = useState("popular");

  const handleAPIChange = (apiType) => {
    setSelectedAPI(apiType);
  };

  return (
    <div>
      <NavBar/>
      <div className="flex items-center justify-center gap-x-3">
        <h1 className="text-2xl text-center cursor-pointer text-white font-Righeous">
          TRENDING:{" "}
        </h1>
        <h1
          className={`text-2xl text-center cursor-pointer hover:text-orange-600 ${
>>>>>>> 07de35d39e3b125c6889193002e17b6e9c8d24f6
            selectedAPI === "popular" ? "text-orange-600" : ""
          }`}
          onClick={() => handleAPIChange("popular")}
        >
          Today
        </h1>
        <h1
<<<<<<< HEAD
          className={`text-2xl text-center cursor-pointer text-foreground hover:text-orange-600 ${
=======
          className={`text-2xl text-center cursor-pointer hover:text-orange-600 ${
>>>>>>> 07de35d39e3b125c6889193002e17b6e9c8d24f6
            selectedAPI === "trending" ? "text-orange-600" : ""
          }`}
          onClick={() => handleAPIChange("trending")}
        >
          This Week
        </h1>
      </div>

      {selectedAPI === "trending" ? (
        <TrendingMovies TrendingMovies={movie} />
      ) : (
        <PopularMoviesAPI PopularMoviesAPI={movie} />
      )}
    </div>
<<<<<<< HEAD
  )
}

export default MoviesPage
=======
  );
};

export default MoviesPage;
>>>>>>> 07de35d39e3b125c6889193002e17b6e9c8d24f6
