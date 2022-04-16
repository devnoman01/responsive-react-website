import React from "react";
import "./NotFound.css";
import sleeping from "../../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="text-center text-danger container div">
      <img className="w-50 my-5" src={sleeping} alt="" />
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">Not Available</h2>
    </div>
  );
};

export default NotFound;
