import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="navbar">
      <h1>ShohaghBD</h1>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
