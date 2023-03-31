import React, { useEffect, useState } from "react";
import row from "./row.css";

import axios from "axios";
import Movie from "./movies.jsx";

//fetch url from row component
function Row(props) {
  const [MoviesRow, Setmovie] = useState([]);
  const [like, setliked] = useState(false);
  // update movies from api
  useEffect(() => {
    axios.get(props.fetchURL).then((response) => {
      Setmovie(response.data.results);
    });
  }, [props.fetchURL]);
  //fetch the  multiple movies api  from tmdi api and set it to the moovies row
  console.log(MoviesRow);

  //mapping all MoviesRow
  const mapMoviesRow = MoviesRow.map((item, index) => (
    <Movie item={item} index={index} style={{ marginTop: "16%" }} />
  ));
  return (
    <div>
      {" "}
      <h2
        className="movieTitle"
        style={{
          color: "black",
          fontWeight: "30%",
          fontSize: "22px",
        }}
      >
        {props.title}
      </h2>
      <div className="row">
        <div className="row_posters">{mapMoviesRow}</div>
      </div>
    </div>
  );
}

export default Row;
