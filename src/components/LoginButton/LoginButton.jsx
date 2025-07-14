import React from "react";
import { Link } from "react-router-dom";

import { URLs } from "../../constants/constants";
import "./styles.css";

const LoginButton = () => {
    return (
        <div>
            <Link to={URLs.login} className="loginButton">
                ВОЙТИ
            </Link>
        </div>
    );
};

export default LoginButton;
