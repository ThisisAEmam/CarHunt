import React from "react";
import Banner from "../../containers/Banner/Banner";
import CarSelection from "../../containers/CarSelection/CarSelection";
import Navbar from "../../containers/Navbar/Navbar";
import classes from "./LandingPage.module.css";

const LandingPage = (props) => {
  return (
    <div className={classes.LandingPage}>
      <Navbar />
      <Banner />
      <CarSelection />
    </div>
  );
};

export default LandingPage;
