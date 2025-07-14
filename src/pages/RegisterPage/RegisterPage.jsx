import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import RegisterForm from "./components/RegisterForm/RegisterForm";
import { writeDataToLocalStorage } from "../../utils/utils";
import { usePost } from "../../hooks/usePost";
import { setAuthDataAction } from "../../store/actions/authDataActions";
import { setDefaultValuesAction } from "../../store/actions/adsActions";
import { URLs } from "../../constants/constants";

const RegisterPage = () => {
    const [registerData, setRegisterData] = useState({
        query: "",
        user: null,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, responseData } = usePost(
        registerData.query,
        registerData.user
    );

    const onSubmit = (data) => {
        const user = {
            email: data.email,
            password: data.password,
            phoneNumber: "",
            name: "",
            city: "",
        };

        setRegisterData({
            query: "register",
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

    return <RegisterForm onSubmit={onSubmit} error={error} />;
};

export default RegisterPage;
