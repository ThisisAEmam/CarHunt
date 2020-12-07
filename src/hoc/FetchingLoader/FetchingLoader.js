import React from "react";
import classes from "./FetchingLoader.module.css";
import { useSpring, animated, config } from "react-spring";

const FetchingLoader = (props) => {
  const showup = useSpring({
    from: {
      transform: "translateY(-2%)",
      opacity: 0,
    },
    transform: "translateY(0)",
    opacity: 1,
    config: config.molasses,
  });

  return (
    <animated.div style={showup} className={classes.FetchingLoader}>
      <img src="/images/loader-with-bg.gif" alt="loader" />
    </animated.div>
  );
};

export default FetchingLoader;
