import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [readMore, setReadMore] = useState(true);

  const { id } = useParams();
  const url = `${API_ENDPOINT}&i=${id}`;

  const getMovie = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }
  const {
    Title: title,
    Poster: poster,
    Actors: actor,
    Director: director,
    Plot: plot,
    Year: year,
  } = movie;
  return (
    <>
      <div className="back-btn">
        <Link to="/">
          <button className="return-btn">Back home</button>
        </Link>
      </div>
      <main className="singleMovie-container">
        <h2>{title}</h2>
        <img src={poster} alt={title} className="singleMovie-img"></img>
        <div>
          <h4>Director: {director}</h4>
          <h4>Year: {year}</h4>
          <h4>Actors: {actor}</h4>
          <p>{readMore ? plot.substring(0, 60) : plot}</p>
          <button className="read-more" onClick={() => setReadMore(!readMore)}>
            {readMore ? "...read more" : "...read less"}
          </button>
        </div>
      </main>
    </>
  );
};

export default SingleMovie;
