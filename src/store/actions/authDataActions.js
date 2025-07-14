import { authDataActionTypes } from "../reducers/authDataReducer";

const setUserIdAction = (userId) => ({
    type: authDataActionTypes.SET_USER_ID,
    payload: userId,
});

const setAccessTokenAction = (accessToken) => ({
    type: authDataActionTypes.SET_ACCESS_TOKEN,
    payload: accessToken,
});

export const setAuthDataAction = (accessToken, userId) => {
    return (dispatch) => {
        dispatch(setAccessTokenAction(accessToken));
        dispatch(setUserIdAction(userId));
    };
};

export const removeAuthDataAction = () => {
    return (dispatch) => {
        dispatch({
            type: authDataActionTypes.REMOVE_USER_ID,
        });
        dispatch({
            type: authDataActionTypes.REMOVE_ACCESS_TOKEN,
        });
    };
};
