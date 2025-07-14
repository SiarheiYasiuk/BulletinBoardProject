import { userActionTypes } from "../reducers/userReducer";

export const setUserAction = (user) => ({
    type: userActionTypes.SET_USER,
    payload: user,
});

export const removeUserAction = () => ({
    type: userActionTypes.REMOVE_USER,
});

export const updateUserAction = (userData) => {
    return (dispatch, getState) => {
        const currentUserData = getState().user.user;

        const updatedUserData = {
            ...currentUserData,
            ...userData,
        };

        dispatch(setUserAction(updatedUserData));
    };
};
