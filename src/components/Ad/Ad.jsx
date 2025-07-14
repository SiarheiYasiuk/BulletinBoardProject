import React from "react";
import { Link } from "react-router-dom";

import { parseDate } from "../../utils/utils";
import { URLs } from "../../constants/constants";
import "./styles.css";

const Ad = ({id, name, price, place, date}) => {
    const adLink = URLs.aboutAd.replace(":adId", id);

    return (
        <Link to={adLink}>
            <div className="ad">
                <div className="namePrice">
                    <div className="name">{name}</div>
                    <div className="price">{price} б.р.</div>
                </div>
                <div className="placeDate">
                    <div className="place">{place}</div>
                    <div className="date">{parseDate(date)}</div>
                </div>
            </div>
        </Link>
    );
};

export default Ad;
