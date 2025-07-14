import React from "react";
import { Link } from "react-router-dom";

import { URLs } from "../../../../constants/constants";
import "./styles.css";

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className="modalContainer">
            {isOpen ? (
                <div>
                    <div className="modal-overlay" onClick={onClose}></div>
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Управление объявлением</h2>
                            <Link to={URLs.submitAd}>Изменить объявление</Link><br />
                            <button onClick={onClose}>
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Modal;
