import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => {
        return <Movie key={movie.id} name={movie.name} price={movie.price} />;
      })}
    </div>
  );
};

export default MovieList;
