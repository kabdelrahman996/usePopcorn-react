import { useState, useEffect } from "react";
const KEY = "3c6486f1";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError("");
        let res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something Went Wrong, Couldn't Fetch data!!");

        let data = await res.json();

        if (data.Response === "False")
          throw new Error("Couldn't Find The Movie");
        setMovies(data.Search);
        setError("");
        // console.log(movies);
        setIsLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setError("");
      setIsLoading(false);
      return;
    }

    // handleCloseMovie();
    fetchMovie();
    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
