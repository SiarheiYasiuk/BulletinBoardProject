export const authDataActionTypes = {
    SET_USER_ID: "SET_USER_ID",
    REMOVE_USER_ID: "REMOVE_USER_ID",
    SET_ACCESS_TOKEN: "SET_ACCESS_TOKEN",
    REMOVE_ACCESS_TOKEN: "REMOVE_ACCESS_TOKEN",
};

const initialState = {
    userId: null,
    accessToken: null,
};

const authDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case authDataActionTypes.SET_USER_ID:
            return {
                ...state,
                userId: action.payload,
            };

        case authDataActionTypes.REMOVE_USER_ID:
            return {
                ...state,
                userId: null,
            };

        case authDataActionTypes.SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload,
            };

        case authDataActionTypes.REMOVE_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: null,
            };

        default:
            return state;
    }
};

export default authDataReducer;
