import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import "./Home.css";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div id="home" className="home-parent">
      <Banner />
      <Services />
      <Experts />
      <Footer />
    </div>
  );
};

export default Home;
