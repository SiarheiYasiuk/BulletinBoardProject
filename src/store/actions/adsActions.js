import { adsActionTypes } from "../reducers/adsReducer";

export const setSortValueAction = (sort, field) => (dispatch) => {
    dispatch({ type: adsActionTypes.SET_SORT, payload: sort });
    dispatch({ type: adsActionTypes.SET_FIELD, payload: field });
};

export const setPriceRangeAction = (fromPrice, toPrice) => (dispatch) => {
    dispatch({ type: adsActionTypes.SET_FROM_PRICE, payload: fromPrice });
    dispatch({ type: adsActionTypes.SET_TO_PRICE, payload: toPrice });
};

export const setSearchValueAction = (searchValue) => (dispatch) => {
    dispatch({ type: adsActionTypes.SET_SEARCH_VALUE, payload: searchValue });
};

export const setPageAction = (page) => (dispatch) => {
    dispatch({ type: adsActionTypes.SET_PAGE, payload: page });
};

export const setDataValueAction = (data, totalCount) => (dispatch) => {
    dispatch({ type: adsActionTypes.SET_DATA, payload: data });
    dispatch({ type: adsActionTypes.SET_TOTAL_COUNT, payload: totalCount });
};

export const setDataErrorAction = (error) => (dispatch) => {
    dispatch({ type: adsActionTypes.SET_DATA_ERROR, payload: error });
};

export const setDataLoadingAction = (isLoading) => (dispatch) => {
    dispatch({ type: adsActionTypes.SET_DATA_LOADING, payload: isLoading });
};

export const setCurrentAdAction = (currentAd) => ({
    type: adsActionTypes.SET_CURRENT_AD,
    payload: currentAd,
});

export const removeCurrentAdAction = () => ({
    type: adsActionTypes.REMOVE_CURRENT_AD,
});

export const setDefaultValuesAction = () => (dispatch) => {
    dispatch(setSearchValueAction(""));
    dispatch(setSortValueAction("desc", "date"));
    dispatch(setPriceRangeAction("", ""));
};
