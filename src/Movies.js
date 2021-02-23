import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies } = useGlobalContext();

  return (
    <main className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <div className="movie" key={id}>
            <Link to={`/movie/${id}`} className="link">
              <img
                src={
                  poster === "N/A"
                    ? "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"
                    : poster
                }
                alt={title}
                className="movie-img"
              ></img>
            </Link>
            <div>
              <h4>{title}</h4>
              <p>{year}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Movies;
