import React from "react";
import Main from "./main";
import "./index.css";
import Row from "./Row";
import request from "./request";
function MovieGene() {
  return (
    <>
      {/* the component for home page and row title */}
      <Main />

      {/* //row for movies selection */}
      <Row title=" Upcoming " fetchURL={request.Upcoming} />
      <Row title=" Popular " fetchURL={request.popular} />

      <Row title=" Trending " fetchURL={request.Trending} />
      <Row title=" Horror " fetchURL={request.Horror} />
    </>
  );
}

export default MovieGene;
