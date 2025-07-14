import React from "react";

import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import AuthenticationControlPanel from "../AuthenticationControlPanel/AuthenticationControlPanel";
import SubmitAdButton from "../SubmitAdButton/SubmitAdButton";
import "./styles.css";

const Header = ({ onSearchSubmit }) => {
    return (
        <header className="header">
            <Logo />
            <div className="headerSection">
                <SearchForm onSearchSubmit={onSearchSubmit} />
                <SubmitAdButton />
                <AuthenticationControlPanel />
            </div>
        </header>
    );
};

export default Header;
