import React from "react";
import Main from "./main";
import SavedShows from "./saved.jsx";

const Account = () => {
  return (
    <div>
      <div>
        <Main />

        <div style={{ marginTop: "10%" }}>
          <SavedShows />
        </div>
      </div>
    </div>
  );
};
export default Account;
