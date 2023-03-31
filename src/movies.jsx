import React, { useState } from "react";
import { ThumbUp } from "@mui/icons-material";
import { ThumbUpOffAlt } from "@mui/icons-material";
import { UserAuth } from "./context";
import { db } from "./firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import "./row.css";
function Movie({ item, index }) {
  const [like, setliked] = useState(false);
  const [saved, setsaved] = useState(false);
  const { user } = UserAuth();

  const MovieId = doc(db, "users", `${user?.email}`);
  console.log(item?.backdrop_path);

  // this async function stored the movie and check whether the user is login
  //if true the change the liked button to be true and change the saved state to be true
  // update and and the movies user clicked
  const savedShow = async () => {
    if (user?.email) {
      setliked(!like);
      setsaved(!saved);
      await updateDoc(MovieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please log in to save a movie");
    }
  };

  return (
    <div className="row_posterLarge" key={item?.id}>
      <img
        src={` https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
        className="row_posterLarge"
      />
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
        <p
          className="titleMovie"
          style={{
            position: "absolute",
            whiteSpace: "normal",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {item?.title}
        </p>

        <p onClick={savedShow}>
          {like ? (
            <ThumbUp
              style={{
                position: "absolute",
                top: "4px",
                left: "4px",
                fontSize: "30px",
                color: "gray",
                textIndent: "300px",
              }}
            />
          ) : (
            <ThumbUpOffAlt
              style={{
                position: "absolute",
                top: "4px",
                fontSize: "30px",

                left: "4px",
                color: "gray",
                textIndent: "300px",
              }}
            />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie;
