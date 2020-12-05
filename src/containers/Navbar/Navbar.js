import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useSpring, animated, config } from "react-spring";

const Navbar = (props) => {
  const showup = useSpring({
    from: {
      transform: "translateY(-30%)",
    },
    transform: "translateY(0)",
    config: config.molasses,
  });

  return (
    <animated.div style={showup} className={classes.Navbar}>
      <div className={[classes.container, "container"].join(" ")}>
        <Link className={classes.logo} to="/">
          <img src="images/logo.png" alt="logo" />
        </Link>
        <div className={classes.navlinks}>
          <Link className={[classes.navlink, classes.login].join(" ")} to="/login">
            Log in
          </Link>
          <Link className={[classes.navlink, classes.signup].join(" ")} to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default Navbar;
