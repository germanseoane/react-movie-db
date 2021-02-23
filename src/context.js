import React, { useState, useEffect, useContext, useCallback } from "react";

export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("lord of the rings");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ state: false, msg: "" });

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}&s=${search}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setIsLoading(false);
        setError({ state: false, msg: "" });
      }
      if (data.Response === "False") {
        setError({ state: true, msg: data.Error });
        setIsLoading(false);
      }
    } catch (err) {
      throw new Error(err);
    }
  }, [search]);

  useEffect(() => {
    fetchMovies();
  }, [search, fetchMovies]);

  return (
    <AppContext.Provider value={{ movies, isLoading, error, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
