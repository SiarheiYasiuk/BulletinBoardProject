import React from "react";

import "./styles.css";

const CategoryName = ({ isLoading, error, name }) => {
    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка при загрузке данных.</div>;
    }

    return (
        <div className="categoryName">
            {name}
        </div>
    );
};

export default CategoryName;