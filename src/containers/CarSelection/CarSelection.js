import React, { useEffect, useState } from "react";
import classes from "./CarSelection.module.css";
import axios from "axios";
import CarSelectionDropdown from "../../components/CarSelectionDropdown/CarSelectionDropdown";

const CarSelection = (props) => {
  const [data, setData] = useState([]);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "X-Parse-Application-Id": "SleSRDzFdFksSaySOEHPwURNjROttsBfnTuygPgf",
  //       "X-Parse-REST-API-Key": "ln7SlAgSSBSY5rABFa5kcdJDDr50EVkuyriPRvMd",
  //     },
  //   };

  //   let limit = 0;

  //   const where = encodeURIComponent(
  //     JSON.stringify({
  //       Make: {
  //         $exists: true,
  //       },
  //       Model: {
  //         $exists: true,
  //       },
  //       Category: {
  //         $exists: true,
  //       },
  //       Year: {
  //         $exists: true,
  //       },
  //     })
  //   );

  //   axios
  //     .get("https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?count=1", config)
  //     .then((res) => {
  //       limit = res.data.count;
  //       axios
  //         .get(`https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=${limit}&where=${where}`, config)
  //         .then((res) => setData(res.data.results))
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    if (data.length !== 0) {
      const filtered = data.filter((item) => item.Year === 2020);
      console.log(filtered);
    }
  }, [data]);

  return (
    <div className={classes.CarSelection}>
      <h2 className={classes.title}>Choose a car to start fetching reviews of it.</h2>
      <div className="container">
        <div className={classes.dropdowns}>
          <CarSelectionDropdown type="manufacturer" />
          <CarSelectionDropdown type="model" />
          <CarSelectionDropdown type="year" />
          <button className={classes.startBtn}>Start Reviewing</button>
        </div>
      </div>
    </div>
  );
};

export default CarSelection;
