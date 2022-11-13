import React from "react";
import Rank from "./Rank";

const Home = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   event.target[0].value
  //     ? console.log(event.target[0].value)
  //     : console.log(event.target[1].file);
  // };

  return (
    <div className="home">
      <Rank />
      <p>{`This AI Tool will detect faces in your picture. Give it a try`}</p>
      <div style={{ opacity: "1" }}>
        <input
          type="text"
          style={{
            width: "30rem",
            height: "2rem",
            border: "none",
            textAlign: "center",
          }}
        />
        <button
          style={{
            backgroundColor: "purple",
            color: "white",
            border: "none",
            height: "2rem",
            width: "10rem",
          }}
          onClick={() => {
            console.log("clicked");
          }}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default Home;
