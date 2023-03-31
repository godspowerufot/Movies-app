import React, { useState } from "react";
import "./search.css";
import { ThumbUp } from "@mui/icons-material";
import { ThumbUpOffAlt } from "@mui/icons-material";
import { UserAuth } from "./context";

import { db } from "./firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function SearchMore({ movie }) {
  const [like, setliked] = useState(false);
  const [saved, setsaved] = useState(false);
  const { user } = UserAuth();

  const MovieId = doc(db, "users", `${user?.email}`);

  const savedShow = async () => {
    if (user?.email) {
      setliked(!like);
      setsaved(!saved);
      await updateDoc(MovieId, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("please log in to save a movie");
    }
  };
  return (
    <div key={movie.id} className="movie">
      <div className="movie-header">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie.title}
          style={{}}
        />

        <div className="movie-title">
          <div
            className="title"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              color: "white",
              height: "100%",
            }}
          >
            <h1>{movie.title}</h1>
            <p onClick={savedShow}>
              {like ? (
                <ThumbUp
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "4px",
                    color: "gray",
                    textIndent: "300px",
                  }}
                />
              ) : (
                <ThumbUpOffAlt
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "4px",
                    color: "gray",
                    textIndent: "300px",
                  }}
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMore;
