import React from "react";
import classes from "./CarsLogos.module.css";

const CarsLogos = (props) => {
  const names = [
    "audi",
    "bmw",
    "mercedes",
    "ford",
    "dodge",
    "jeep",
    "mini",
    "ferrari",
    "tesla",
    "opel",
    "volvo",
    "honda",
    "mazda",
    "nissan",
    "peugeot",
    "hyundai",
    "toyota",
    "fiat",
    "сhevrolet",
    "suzuki",
    "volkswagen",
  ];
  return (
    <div className={classes.CarsLogos}>
      <div className="container">
        <div className={classes.images}>
          {names.map((name, index) => (
            <div className={classes.imageContainer}>
              <img key={index} src={`/images/cars/${name}.png`} alt="carLogo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsLogos;
