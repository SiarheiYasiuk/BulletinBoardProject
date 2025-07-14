import React from "react";

import Category from "../Category/Category";
import car from "../../../../imgs/car.png"
import notepad from "../../../../imgs/notepad.png";
import cat from "../../../../imgs/cat.png";
import factory from "../../../../imgs/factory.png";
import house from "../../../../imgs/house.png";
import kaska from "../../../../imgs/kaska.png";
import kreslo from "../../../../imgs/kreslo.png";
import miha from "../../../../imgs/miha.png";
import monitor from "../../../../imgs/monitor.png";
import palm from "../../../../imgs/palm.png";
import tractor from "../../../../imgs/tractor.png";
import veshalka from "../../../../imgs/veshalka.png";

const Categories = ({ categories, isLoading, error }) => {
    const imagePaths = {
        car: car,
        notepad: notepad,
        cat: cat,
        factory: factory,
        house: house,
        kaska: kaska,
        kreslo: kreslo,
        miha: miha,
        monitor: monitor,
        palm: palm,
        tractor: tractor,
        veshalka: veshalka,
    };

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (!categories) {
        return <div>Данные по категориям отсутствуют.</div>;
    }

    if (error) {
        return <div>Ошибка при загрузке категорий.</div>;
    }

    return (
        <div className="categories">
            {categories.map((obj) => (
                <Category
                    key={`category-${obj.id}`}
                    src={imagePaths[obj.image]}
                    category={obj.category}
                    name={obj.name}
                />
            ))}
        </div>
    );
};

export default Categories;
