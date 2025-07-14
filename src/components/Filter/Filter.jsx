import React, { useState } from "react";

import "./styles.css";

const Filter = ({ onFilterSubmit }) => {
    const [fromPrice, setFromPrice] = useState("");
    const [toPrice, setToPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fromPrice === "") {
            setFromPrice(0);
        }
        if (toPrice === "") {
            setToPrice(+Infinity);
        }
        onFilterSubmit({ fromPrice, toPrice });
    };

    const handleInputFromChange = (e) => {
        setFromPrice(e.target.value);
    };

    const handleInputToChange = (e) => {
        setToPrice(e.target.value);
    };

    return (
        <div className="filter">
            <form onSubmit={handleSubmit}>
                <div className="filterName">Цена</div>
                <input
                    key="input-from"
                    className="from"
                    type="number"
                    placeholder="От"
                    min={0}
                    value={fromPrice}
                    onChange={handleInputFromChange}
                />
                <input
                    key="input-to"
                    className="to"
                    type="number"
                    placeholder="До"
                    min={0}
                    value={toPrice}
                    onChange={handleInputToChange}
                />
                <button
                    key="button-submit"
                    type="submit"
                >
                    Поиск
                </button>
            </form>
        </div>
    );
};

export default Filter;
