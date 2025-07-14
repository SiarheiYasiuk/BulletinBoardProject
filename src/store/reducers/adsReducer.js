export const adsActionTypes = {
    SET_DATA: "SET_DATA",
    SET_DATA_ERROR: "SET_DATA_ERROR",
    SET_DATA_LOADING: "SET_DATA_LOADING",
    SET_TOTAL_COUNT: "SET_TOTAL_COUNT",
    SET_SORT: "SET_SORT",
    SET_FIELD: "SET_FIELD",
    SET_FROM_PRICE: "SET_FROM_PRICE",
    SET_TO_PRICE: "SET_TO_PRICE",
    SET_SEARCH_VALUE: "SET_SEARCH_VALUE",
    SET_LIMIT: "SET_LIMIT",
    SET_PAGE: "SET_PAGE",
    SET_CURRENT_AD: "SET_CURRENT_AD",
    REMOVE_CURRENT_AD: "REMOVE_CURRENT_AD",
};

export const initialState = {
    data: [],
    dataError: null,
    dataLoading: null,
    sort: "desc",
    field: "date",
    fromPrice: "",
    toPrice: "",
    searchValue: "",
    totalCount: 0,
    limit: 10,
    page: 1,
    currentAd: null,
};

const adsReducer = (state = initialState, action) => {
    switch (action.type) {
        case adsActionTypes.SET_DATA:
            return { ...state, data: action.payload };
        case adsActionTypes.SET_DATA_ERROR:
            return { ...state, dataError: action.payload };
        case adsActionTypes.SET_DATA_LOADING:
            return { ...state, dataLoading: action.payload };
        case adsActionTypes.SET_TOTAL_COUNT:
            return { ...state, totalCount: action.payload };
        case adsActionTypes.SET_SORT:
            return { ...state, sort: action.payload };
        case adsActionTypes.SET_FIELD:
            return { ...state, field: action.payload };
        case adsActionTypes.SET_FROM_PRICE:
            return { ...state, fromPrice: action.payload };
        case adsActionTypes.SET_TO_PRICE:
            return { ...state, toPrice: action.payload };
        case adsActionTypes.SET_SEARCH_VALUE:
            return { ...state, searchValue: action.payload };
        case adsActionTypes.SET_LIMIT:
            return { ...state, limit: action.payload };
        case adsActionTypes.SET_PAGE:
            return { ...state, page: action.payload };
        case adsActionTypes.SET_CURRENT_AD:
            return { ...state, currentAd: action.payload };
        case adsActionTypes.REMOVE_CURRENT_AD:
            return { ...state, currentAd: null };
        default:
            return state;
    }
};

export default adsReducer;
