import React, { useState } from "react";

import "./styles.css";

const SortButtons = React.memo(({ onSortChange }) => {
    const [activeButton, setActiveButton] = useState("desc-date");

    const handleSortChange = (sort, field) => {
        setActiveButton(`${sort}-${field}`);
        onSortChange({ sort, field });
    };

    const handleClickByDate = () => {
        handleSortChange("desc", "date");
    };

    const handleClickByPriceAsc = () => {
        handleSortChange("asc", "price");
    };

    const handleClickByPriceDesc = () => {
        handleSortChange("desc", "price");
    };

    return (
        <div className="displayType">
            <button
                onClick={handleClickByDate}
                className={activeButton === "desc-date" ? "active" : ""}
            >
                По новизне
            </button>
            <button
                onClick={handleClickByPriceAsc}
                className={activeButton === "asc-price" ? "active" : ""}
            >
                ↓Сначала дешевле
            </button>
            <button
                onClick={handleClickByPriceDesc}
                className={activeButton === "desc-price" ? "active" : ""}
            >
                ↑Сначала дороже
            </button>
        </div>
    );
});

export default SortButtons;
