import React, { useState, useEffect } from "react";
import classes from "./CarSelectionDropdown.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCarSelected } from "../../features/carSelectedSlice";

const CarSelectionDropdown = (props) => {
  const [selected, setSelected] = useState(false);
  const [type, setType] = useState(null);
  const [data, setData] = useState([]);

  const { carSelected } = useSelector((state) => state);

  const dispatch = useDispatch(carSelected);

  useEffect(() => {
    setType(props.type);
  }, [props.type]);

  useEffect(() => {
    if (props.data.length !== 0) {
      if (type === "brand") {
        const temp = [];
        props.data.map((item) => {
          if (!temp.includes(item.Make)) {
            temp.push(item.Make);
          }
          return 0;
        });
        temp.sort();
        setData([...temp]);
      } else if (type === "model") {
        const temp = [];
        if (carSelected.brand !== "None") {
          const modelsTemp = props.data.filter((item) => item.Make === carSelected.brand);
          modelsTemp.map((item) => {
            if (!temp.includes(item.Model)) {
              temp.push(item.Model);
            }
            return 0;
          });
          temp.sort();
          setData([...temp]);
        }
      } else if (type === "year") {
        const temp = [];
        if (carSelected.brand !== "None" && carSelected.model !== "None") {
          const yearsTemp = props.data.filter((item) => item.Make === carSelected.brand && item.Model === carSelected.model);
          yearsTemp.map((item) => {
            if (!temp.includes(item.Year)) {
              temp.push(item.Year);
            }
            return 0;
          });
          setData([...temp]);
        }
      }
    }
  }, [carSelected, props.data, type]);

  // useEffect(() => {
  //   if (props.data.length !== 0) {

  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.data, carSelected]);

  const selectHandler = (selectTag) => {
    const value = selectTag.target.value;
    const temp = { ...carSelected };
    if (value !== "None") {
      setSelected(true);
      if (type === "brand") {
        temp.brand = value;
      } else if (type === "model") {
        temp.model = value;
      } else {
        temp.year = value;
      }

      dispatch(setCarSelected(temp));
    } else {
      setSelected(false);
      if (type === "brand") {
        temp.brand = value;
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
        {type === "brand" ? "Select a Brand" : type === "model" ? "Select a Model" : type === "year" ? "Select a Year" : ""}
      </option>
      {data.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default CarSelectionDropdown;
