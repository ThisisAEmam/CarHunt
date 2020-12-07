import React, { useEffect, useState, useRef } from "react";
import classes from "./CarSelection.module.css";
import axios from "axios";
import CarSelectionDropdown from "../../components/CarSelectionDropdown/CarSelectionDropdown";
import { useSpring, animated, config } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { setFetchingLoaderShown } from "../../features/fetchingLoaderSlice";

const CarSelection = (props) => {
  const [data, setData] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const btnRef = useRef();

  const { isFetchingLoaderShown, carSelected } = useSelector((state) => state);
  const fetchingLoaderDispatch = useDispatch(isFetchingLoaderShown);

  const showup = useSpring({
    from: {
      transform: "translateY(5%)",
      opacity: 0,
    },
    transform: "translateY(0)",
    opacity: 1,
    config: config.molasses,
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

  useEffect(() => {
    if (carSelected.brand !== "None" && carSelected.model !== "None" && carSelected.year !== "None") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [carSelected]);

  const clickHandler = () => {
    console.log(btnRef.current);
    if (!btnRef.current.classList.contains("CarSelection_disabled__1tz1D")) {
      fetchingLoaderDispatch(setFetchingLoaderShown(true));
      setTimeout(() => {
        fetchingLoaderDispatch(setFetchingLoaderShown(false));
      }, 10000);
    }
  };

  return (
    <animated.div style={showup} className={classes.CarSelection}>
      <h2 className={classes.title}>Choose a car to start fetching reviews of it.</h2>
      <div className="container">
        <div className={classes.dropdowns}>
          <CarSelectionDropdown type="brand" data={data} />
          <CarSelectionDropdown type="model" data={data} />
          <CarSelectionDropdown type="year" data={data} />
          <button className={[classes.startBtn, btnDisabled ? classes.disabled : null].join(" ")} ref={btnRef} onClick={clickHandler}>
            Start Reviewing
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default CarSelection;
