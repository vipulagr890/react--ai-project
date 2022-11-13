import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import dataimg from "./Yin_and_Yang_symbol.png";

const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem 2rem",
      }}
    >
      <Tilt>
        <div
          style={{
            height: "4rem",
            width: "4rem",
            border: "1px solid rgb(184, 179, 179)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img
              src={dataimg}
              alt=""
              height="50rem"
              width="50rem"
              className="App-logo"
            />
          </Link>
        </div>
      </Tilt>
      <p>Sign Out</p>
    </div>
  );
};

export default Navigation;
