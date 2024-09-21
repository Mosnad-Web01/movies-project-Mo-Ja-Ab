"use client";
import React, { useState } from "react";
import Card from "../../components/Card/Card";
const Search = () => {
  const [query, setQuery] = useState(""); // Manage search input
  const [results, setResults] = useState([]); // Store search results
  const [loading, setLoading] = useState(false); // Manage loading state

  // Function to handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    const apiKey = process.env.NEXT_PUBLIC_APIKEY;
    const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component">
      <form
        className="mt-2 mx-auto max-w-xl py-1 px-3 rounded-full bg-gray-50 border flex focus-within:border-gray-300"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search anything"
          className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0 text-gray-900"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state on input
          name="topic"
        />
        <button
          className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {/* Display search results using the Card component */}
      <div className="search-results mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.length > 0 ? (
          results.map((item) => <Card key={item.id} item={item} />)
        ) : (
          !loading && <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
