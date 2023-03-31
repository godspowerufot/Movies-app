import React, { useState } from "react";
import axios from "axios";
import "./search.css";
const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=6482fbb45a9acbb824fcc7b6eadbb721&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a movie..."
            value={query}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {movies.map((movie) => (
        <div key={movie.id} className="card mt-4">
          <div className="card-body">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: "0.5",
              }}
            />
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieSearch;
