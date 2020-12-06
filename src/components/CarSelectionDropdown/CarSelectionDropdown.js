import React, { useState, useEffect } from "react";
import classes from "./CarSelectionDropdown.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCarSelected } from "../../features/carSelectedSlice";

const CarSelectionDropdown = (props) => {
  const [selected, setSelected] = useState(false);
  const [type, setType] = useState(null);

  const { carSelected } = useSelector((state) => state);

  const dispatch = useDispatch(carSelected);

  useEffect(() => {
    setType(props.type);
  }, []);

  const selectHandler = (selectTag) => {
    const value = selectTag.target.value;
    const temp = { ...carSelected };
    if (value !== "None") {
      setSelected(true);
      if (type === "manufacturer") {
        temp.manufacturer = value;
      } else if (type === "model") {
        temp.model = value;
      } else {
        temp.year = value;
      }

      dispatch(setCarSelected(temp));
    } else {
      setSelected(false);
      if (type === "manufacturer") {
        temp.manufacturer = value;
      } else if (type === "model") {
        temp.model = value;
      } else {
        temp.year = value;
      }

      dispatch(setCarSelected(temp));
    }
  };

  return (
    <select className={[classes.CarSelectionDropdown, selected ? classes.selected : null].join(" ")} onChange={selectHandler}>
      <option className={classes.defaultOption} value="None" defaultValue>
        {type === "manufacturer" ? "Select a Manufacturer" : type === "model" ? "Select a Model" : type === "year" ? "Select a Year" : ""}
      </option>
      <option value="Audi">Audi</option>
      <option value="Mercedes">Mercedes</option>
    </select>
  );
};

export default CarSelectionDropdown;
