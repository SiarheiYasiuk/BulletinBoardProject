import React from "react";
import { Link } from "react-router-dom";

import { URLs } from "../../../../constants/constants";
import "./styles.css";

const Category = ({ src, category, name }) => {
    const categoryLink = URLs.category.replace(":category", category);

    return (
        <div className="categorySection">
            <div className="name">
                <Link to={categoryLink}>{name}</Link>
                <hr />
            </div>
            <img src={src} alt="" />
        </div>
    );
};

export default Category;
