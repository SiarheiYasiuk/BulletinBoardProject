import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CategoryName from "../../components/CategoryName/CategoryName";
import Loader from "../../components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { parseDate } from "../../utils/utils";
import { useAdDetailsFetch } from "../../hooks/useAdDetailsFetch";
import { getUser } from "./../../store/selectors/userSelectors";
import { setCurrentAdAction, setDefaultValuesAction } from "../../store/actions/adsActions";
import "./styles.css";

const AdDetailsPage = () => {
    const dispatch = useDispatch();
    
    const { adId } = useParams();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { adResponse, adError } = useAdDetailsFetch(adId);

    const user = useSelector(getUser);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    useEffect(() => {
        if (adResponse) {
            dispatch(setCurrentAdAction(adResponse.data));
        }
    }, [adResponse, dispatch]);

    useEffect(() => {
        dispatch(setDefaultValuesAction());
    }, [dispatch]);

    if (adError) {
        return (
            <div>Ошибка загрузки подробной информации о данном объявлении</div>
        );
    }

    return (
        <div className="adDetailsPage">
            {adResponse ? (
                <div>
                    <CategoryName name={adResponse.data.name} />
                    <div className="blocksContainer">
                        <div className="descriptionBlock">
                            {adResponse.data.description}
                        </div>
                        <div className="informationBlock">
                            <span className="adPrice">
                                Цена: {adResponse.data.price} б.р.
                            </span>
                            <br />
                            Телефон: {adResponse.data.ownerPhoneNumber}
                            <br />
                            {adResponse.data.ownerName}
                            <br />
                            Город: {adResponse.data.place}
                            <br />
                            {parseDate(adResponse.data.date)}
                            {user && user.id === adResponse.data.ownerId ? (
                                <button onClick={toggleModal}>
                                    Управлять объявлением
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
            <Modal isOpen={modalIsOpen} onClose={toggleModal} />
        </div>
    );
};

export default AdDetailsPage;
