// import MainSwiper from "./components/dataSwiper/MainSwiper";
// import MoviesSwiper from "./components/dataSwiper/MoviesSwiper";
// import TVShowsSwiper from "./components/dataSwiper/TVShowsSwiper";
import MainSwiper from "@/components/dataSwiper/MainSwiper"
import MoviesSwiper from "@/components/dataSwiper/MoviesSwiper"
import TVShowsSwiper from "@/components/dataSwiper/TVShowsSwiper"
import Search from "./APIFetch/Search"
export default function Home() {
  return (
    <>
      <MainSwiper />
      <Search />
      <h1 className="text-left text-4xl ml-10 mt-10 mb-10 font-bold text-white">
        Trending Movies
      </h1>
      <MoviesSwiper />
      <h1 className="text-left text-4xl ml-10 mt-10 mb-10 font-bold text-white">
        Latest TV Shows
      </h1>

      <TVShowsSwiper />
    </>
  )
}
