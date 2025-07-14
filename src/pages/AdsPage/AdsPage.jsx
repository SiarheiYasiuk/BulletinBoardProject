import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "./components/Categories/Categories";
import CategoryName from "../../components/CategoryName/CategoryName";
import Filter from "../../components/Filter/Filter";
import AdsSection from "../../components/AdsSection/AdsSection";
import { useAdsFetch } from "../../hooks/useAdsFetch";
import { useCategoriesFetch } from "../../hooks/useCategoriesFetch";
import {
    setDataErrorAction,
    setDataLoadingAction,
    setDataValueAction,
    setPageAction,
    setPriceRangeAction,
    setSortValueAction,
} from "../../store/actions/adsActions";
import { getAdsFilterInfo } from "../../store/selectors/adsSelectors";

const AdsPage = () => {
    const dispatch = useDispatch();

    const adsFilterInfo = useSelector(getAdsFilterInfo);

    const [categories, setCategories] = useState("");

    const { categoriesLoading, categoriesError, categoriesResponse } =
        useCategoriesFetch();

    const { adsLoading, adsError, adsResponse } = useAdsFetch(adsFilterInfo);

    const handleSortChange = (sortProps) => {
        dispatch(setSortValueAction(sortProps.sort, sortProps.field));
    };

    const handleFilterSubmit = (filterProps) => {
        dispatch(
            setPriceRangeAction(filterProps.fromPrice, filterProps.toPrice)
        );
    };

    const handlePageClick = (page) => {
        dispatch(setPageAction(page));
    };

    useEffect(() => {
        if (categoriesResponse !== null) {
            setCategories(categoriesResponse.data);
        }
    }, [categoriesResponse]);

    useEffect(() => {
        dispatch(setPageAction(1));
    }, [
        adsFilterInfo.sort,
        adsFilterInfo.field,
        adsFilterInfo.fromPrice,
        adsFilterInfo.toPrice,
        adsFilterInfo.searchValue,
        dispatch,
    ]);

    useEffect(() => {
        if (adsResponse !== null) {
            dispatch(
                setDataValueAction(
                    adsResponse.data,
                    adsResponse.headers["x-total-count"]
                )
            );
        }
    }, [adsResponse, dispatch]);

    useEffect(() => {
        dispatch(setDataLoadingAction(adsLoading));
    }, [adsLoading, dispatch]);

    useEffect(() => {
        if (adsError) {
            dispatch(setDataErrorAction(adsError));
        }
    }, [adsError, dispatch]);

    return (
        <div>
            <Categories
                categories={categories}
                isLoading={categoriesLoading}
                error={categoriesError}
            />
            <CategoryName name={"Все объявления"} />
            <Filter onFilterSubmit={handleFilterSubmit} />
            <AdsSection
                onSortChange={handleSortChange}
                onPageClick={handlePageClick}
            />
        </div>
    );
};

export default AdsPage;
