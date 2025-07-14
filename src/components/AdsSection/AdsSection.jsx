import React from "react";

import SortButtons from "./../SortButtons/SortButtons";
import AdsList from "./../AdsList/AdsList";
import Pagination from "./../Pagination/Pagination";
import "./styles.css";

const AdsSection = ({ onSortChange, onPageClick }) => {
    return (
        <div className="blockAds">
            <SortButtons onSortChange={onSortChange} />
            <AdsList />
            <Pagination onPageClick={onPageClick} />
        </div>
    );
};

export default AdsSection;