import React, { useEffect, useState } from "react";
import { UserAuth } from "./context";
import { db } from "./firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import "./row.css";
function SavedShows() {
  const [moviess, setMovie] = useState([]);

  const { user } = UserAuth();
  useEffect(() => {
    const userRef = doc(db, "users", `${user?.email}`);
    //check whose db and the email

    //take a snapshot of the favorite movie he/she click
    //if the exist a snapshot saved it else throw an error
    const unsubscribe = onSnapshot(
      userRef,
      (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          if (data?.savedShows) {
            setMovie(data.savedShows);
          }
        } else {
          console.log("No such document!");
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return unsubscribe;
  }, [user?.email]);
  // return the snapshot

  return (
    <div>
      <div
        style={{
          textCenter: "center",
          fontSize: "20px",
          fontFamily: "sans-serif",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>My shows</p>
      </div>
      <div className="row">
        <div className="row_posters">
          {moviess.map((item, index) => (
            <div className="nothing" key={item?.id}>
              <img
                src={` https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedShows;
