import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Inception",
      price: "$10",
      id: 141452,
    },
    {
      name: "The Dark Knight",
      price: "$13",
      id: 463462,
    },
    {
      name: "The Batman",
      price: "$11",
      id: 3322,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
