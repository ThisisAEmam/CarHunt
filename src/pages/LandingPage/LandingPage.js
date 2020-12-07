import React from "react";
import Banner from "../../containers/Banner/Banner";
import CarSelection from "../../containers/CarSelection/CarSelection";
import CarsLogos from "../../containers/CarsLogos/CarsLogos";
import Navbar from "../../containers/Navbar/Navbar";
import FetchingLoader from "../../hoc/FetchingLoader/FetchingLoader";
import classes from "./LandingPage.module.css";
import { useSelector } from "react-redux";

const LandingPage = (props) => {
  const { isFetchingLoaderShown } = useSelector((state) => state);

  return (
    <div className={classes.LandingPage}>
      {!isFetchingLoaderShown ? (
        <div>
          <Navbar />
          <Banner />
          <CarSelection />
          <CarsLogos />
        </div>
      ) : (
        <FetchingLoader />
      )}
    </div>
  );
};

export default LandingPage;
