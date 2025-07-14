import React from "react";
import { useSelector } from "react-redux";

import Ad from "../Ad/Ad";
import Loader from "../Loader/Loader";
import { getAdsInfo } from "./../../store/selectors/adsSelectors";
import "./styles.css";

const AdsList = () => {
    const adsInfo = useSelector(getAdsInfo);

    if (adsInfo.isLoading) {
        return <Loader />;
    }

    if (!adsInfo.data) {
        return <div>Данные по объявлениям отсутствуют.</div>;
    }

    if (adsInfo.error) {
        return <div>Ошибка при получении объявлений.</div>;
    }

    return (
        <div className="adsList">
            {adsInfo.data.map((obj) => (
                <Ad
                    key={`ad-${obj.id}`}
                    id={obj.id}
                    name={obj.name}
                    price={obj.price}
                    place={obj.place}
                    category={obj.category}
                    date={obj.date}
                />
            ))}
        </div>
    );
};

export default AdsList;
