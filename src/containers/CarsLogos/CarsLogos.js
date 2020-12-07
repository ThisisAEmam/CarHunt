import React from "react";
import classes from "./CarsLogos.module.css";

const CarsLogos = (props) => {
  const names = ["audi", "bmw", "mercedes", "ford", "honda", "jeep", "mazda", "mini", "nissan", "opel", "peugeot", "renault", "skoda", "toyota", "volvo"];
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
