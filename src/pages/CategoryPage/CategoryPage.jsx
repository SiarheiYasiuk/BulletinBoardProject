import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CategoryName from "../../components/CategoryName/CategoryName";
import Filter from "../../components/Filter/Filter";
import AdsSection from "../../components/AdsSection/AdsSection";
import { useAdsFetch } from "../../hooks/useAdsFetch";
import { useCategoryName } from "../../hooks/useCategoryName";
import {
    setDataErrorAction,
    setDataLoadingAction,
    setDataValueAction,
    setDefaultValuesAction,
    setPageAction,
    setPriceRangeAction,
    setSortValueAction,
} from "../../store/actions/adsActions";
import { getAdsFilterInfo } from "../../store/selectors/adsSelectors";

const CategoryPage = () => {
    const dispatch = useDispatch();
    const { category } = useParams();

    const adsFilterInfo = useSelector(getAdsFilterInfo);

    const { categoryNameLoading, categoryNameError, name } =
        useCategoryName(category);

    const { adsLoading, adsError, adsResponse } = useAdsFetch({
        ...adsFilterInfo,
        category,
    });

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
        dispatch(setDefaultValuesAction());
    }, [dispatch]);

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
            <CategoryName
                name={`Объявления по категории "${name}"`}
                isLoading={categoryNameLoading}
                error={categoryNameError}
            />
            <Filter onFilterSubmit={handleFilterSubmit} />
            <AdsSection
                onSortChange={handleSortChange}
                onPageClick={handlePageClick}
            />
        </div>
    );
};

export default CategoryPage;
