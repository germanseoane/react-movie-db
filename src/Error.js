import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="error">
      <h1>Oops! Wrong turn.</h1>
      <Link to="/">
        <button className="btn">Back home</button>
      </Link>
    </main>
  );
};

export default Error;
