import React, { useEffect, useState } from "react";
import classes from "./CarSelection.module.css";
import axios from "axios";
import CarSelectionDropdown from "../../components/CarSelectionDropdown/CarSelectionDropdown";
import { useSpring, animated, config } from "react-spring";

const CarSelection = (props) => {
  const [data, setData] = useState([]);

  const showup = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    config: config.slow,
  });

  useEffect(() => {
    const config = {
      headers: {
        "X-Parse-Application-Id": "SleSRDzFdFksSaySOEHPwURNjROttsBfnTuygPgf",
        "X-Parse-REST-API-Key": "ln7SlAgSSBSY5rABFa5kcdJDDr50EVkuyriPRvMd",
      },
    };

    let limit = 0;

    const where = encodeURIComponent(
      JSON.stringify({
        Make: {
          $exists: true,
        },
        Model: {
          $exists: true,
        },
        Category: {
          $exists: true,
        },
        Year: {
          $exists: true,
        },
      })
    );

    axios
      .get("https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?count=1", config)
      .then((res) => {
        limit = res.data.count;
        axios
          .get(`https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=${limit}&where=${where}`, config)
          .then((res) => setData(res.data.results))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <animated.div style={showup} className={classes.CarSelection}>
      <h2 className={classes.title}>Choose a car to start fetching reviews of it.</h2>
      <div className="container">
        <div className={classes.dropdowns}>
          <CarSelectionDropdown type="manufacturer" data={data} />
          <CarSelectionDropdown type="model" data={data} />
          <CarSelectionDropdown type="year" data={data} />
          <button className={classes.startBtn}>Start Reviewing</button>
        </div>
      </div>
    </animated.div>
  );
};

export default CarSelection;
