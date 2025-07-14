import React, { useState } from "react";
import { Link } from "react-router-dom";

import { URLs } from "../../constants/constants";
import profile from "../../imgs/profile.png";
import "./styles.css";

const ProfileButton = ({ onExit }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const handleExit = () => {
        toggleMenu();
        onExit();
    };

    return (
        <div className="dropdown-container">
            <div className="profileIcon" onClick={toggleMenu}>
                <img src={profile} alt="profileIcon" />
            </div>
            {isOpen && (
                <div className="menu">
                    <ul>
                        <Link
                            to={URLs.profile}
                            onClick={toggleMenu}
                            className="userAccountLink"
                        >
                            Личный кабинет
                        </Link>
                        <Link
                            to={URLs.ads}
                            onClick={handleExit}
                            className="exitLink"
                        >
                            Выйти
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfileButton;
