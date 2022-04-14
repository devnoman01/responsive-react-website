import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-parent">
      <Banner />
      <Services />
      <Experts />
    </div>
  );
};

export default Home;
