import React from "react";
import classes from "./Banner.module.css";
import { useSpring, animated, config } from "react-spring";

const Banner = (props) => {
  const showup = useSpring({
    from: {
      transform: "translateY(-15%)",
    },
    transform: "translateY(0)",
    config: config.molasses,
  });

  return (
    <animated.div style={showup} className={classes.Banner}>
      <div className={classes.bg}>
        <img className={classes.BannerImg} src="/images/background.jpg" alt="bg" />
        <div className={classes.overlay}></div>
      </div>
      <div className={classes.textContainer}>
        <div className="container">
          <p className={classes.bannerText}>Use the power of AI to get reviews of your car with a single click.</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Banner;
