import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeCurrentAdAction } from "../../store/actions/adsActions";
import { URLs } from "../../constants/constants";

const SubmitAdButton = () => {
    const dispatch = useDispatch();

    const handleLinkClick = () => {
        dispatch(removeCurrentAdAction());
    }

    return (
        <div>
            <Link onClick={handleLinkClick} to={URLs.submitAd} className="loginButton">
                ПОДАТЬ ОБЪЯВЛЕНИЕ
            </Link>
        </div>
    );
};

export default SubmitAdButton;
