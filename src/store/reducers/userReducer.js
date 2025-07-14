export const userActionTypes = {
    SET_USER: "SET_USER",
    REMOVE_USER: "REMOVE_USER",
};

const initialState = {
    user: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        case userActionTypes.REMOVE_USER:
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
};

export default userReducer;
