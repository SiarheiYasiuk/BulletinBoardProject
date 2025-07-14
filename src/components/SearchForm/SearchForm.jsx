import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getAdsSearchValue } from "../../store/selectors/adsSelectors";
import search from "../../imgs/search.png";
import "./styles.css";

const SearchForm = ({ onSearchSubmit }) => {
    const savedSearchValue = useSelector(getAdsSearchValue);

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        setSearchValue(savedSearchValue);
    }, [savedSearchValue]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSearchSubmit({ searchValue });
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <input
                type="text"
                maxLength={75}
                onChange={handleChange}
                value={searchValue}
            ></input>
            <button type="submit">
                <img src={search} alt="search" />
            </button>
        </form>
    );
};

export default SearchForm;
