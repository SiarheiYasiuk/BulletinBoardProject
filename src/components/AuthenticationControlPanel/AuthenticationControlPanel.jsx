import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfileButton from "../ProfileButton/ProfileButton";
import LoginButton from "../LoginButton/LoginButton";
import { clearLocalStorage } from "../../utils/utils";
import { removeUserAction } from "../../store/actions/userActions";
import { removeAuthDataAction } from "../../store/actions/authDataActions";
import { getAccessToken } from "../../store/selectors/authSelectors";

const AuthenticationControlPanel = () => {
    const dispatch = useDispatch();

    const accessToken = useSelector(getAccessToken);

    const onExit = () => {
        clearLocalStorage();
        dispatch(removeUserAction());
        dispatch(removeAuthDataAction());
    };

    return accessToken ? <ProfileButton onExit={onExit} /> : <LoginButton />;
};

export default AuthenticationControlPanel;
