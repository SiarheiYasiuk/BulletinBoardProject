import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import LoginForm from "./components/LoginForm/LoginForm";
import { writeDataToLocalStorage } from "../../utils/utils";
import { usePost } from "../../hooks/usePost";
import { setAuthDataAction } from "../../store/actions/authDataActions";
import { setDefaultValuesAction } from "../../store/actions/adsActions";
import { URLs } from "../../constants/constants";
import "./styles.css";

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        query: "",
        user: null,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, responseData } = usePost(loginData.query, loginData.user);

    const onSubmit = (data) => {
        const user = {
            email: data.email,
            password: data.password,
        };

        setLoginData({
            query: "login",
            user: user,
        });
    };

    useEffect(() => {
        dispatch(setDefaultValuesAction());
    }, [dispatch]);

    useEffect(() => {
        if (responseData) {
            writeDataToLocalStorage(responseData);

            dispatch(
                setAuthDataAction(
                    responseData.accessToken,
                    responseData.user.id
                )
            );

            navigate(URLs.ads);
        }
    }, [responseData, dispatch, navigate]);

    return (
        <div className="auth-container">
            <LoginForm onSubmit={onSubmit} error={error} />
            <Link to={URLs.register} className="register-button">
                Регистрация
            </Link>
        </div>
    );
};

export default LoginPage;
