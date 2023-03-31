import { useState, useEffect } from "react";
import "./Banner.css";
import request from "./request";

//Truncating string
function truncate(str, length) {
  return str?.length > length ? str.slice(0, length) + "..." : str;
}

const Main = () => {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    fetch(request.popular)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      });
  }, []);
  const random = Math.floor(Math.random() * movie.length);
  const url = movie[random];

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(" https://image.tmdb.org/t/p/original/${url?.backdrop_path}")`,
        backgroundPosition: "60% 10%",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {url?.title || url?.name || url?.original_name}
        </h1>

        <h1 className="banner__description">{url?.realeased}</h1>
        <h1 className="banner__description">{truncate(url?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Main;
