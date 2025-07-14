import React from "react";
import { Link } from "react-router-dom";

import { URLs } from "../../constants/constants";
import logo from "../../imgs/logo.png";
import "./styles.css";

const Logo = () => {
    return (
        <Link to={URLs.ads}><img className="logo" src={logo} alt="logo" /></Link>
    );
};

export default Logo;