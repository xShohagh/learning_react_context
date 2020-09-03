import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div className="movie">
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
};

export default Movie;
