import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, matchPath } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import { useUserFetch } from "./hooks/useUserFetch";
import { readLocalStorageAuthData, clearLocalStorage } from "./utils/utils";
import { setUserAction } from "./store/actions/userActions";
import { setSearchValueAction } from "./store/actions/adsActions";
import {
    removeAuthDataAction,
    setAuthDataAction,
} from "./store/actions/authDataActions";
import { getAuthData } from "./store/selectors/authSelectors";
import { URLs } from "./constants/constants";
import "./styles/styles.css";

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [isAuthDataLoaded, setIsAuthDataLoaded] = useState(false);

    const authData = useSelector(getAuthData);

    const handleSearchSubmit = (searchProps) => {
        dispatch(setSearchValueAction(searchProps.searchValue));

        const categoryMatch = matchPath(
            {
                path: URLs.category,
                exact: true,
            },
            location.pathname
        );

        if (!categoryMatch) {
            navigate(URLs.ads);
        }
    };

    useEffect(() => {
        const localAuthData = readLocalStorageAuthData();
        if (localAuthData) {
            dispatch(setAuthDataAction(localAuthData.accessToken, localAuthData.userId));
        }

        setIsAuthDataLoaded(true);
    }, [dispatch]);

    const { error, user } = useUserFetch(authData);

    useEffect(() => {
        if (user) {
            dispatch(setUserAction(user));
        }
    }, [user, dispatch]);

    useEffect(() => {
        if (error) {
            clearLocalStorage();
            dispatch(removeAuthDataAction());
        }
    }, [error, dispatch]);

    return (
        <div id="container">
            <Header onSearchSubmit={handleSearchSubmit} />
            <AppRoutes isAuthDataLoaded={isAuthDataLoaded} />
        </div>
    );
}

export default App;
