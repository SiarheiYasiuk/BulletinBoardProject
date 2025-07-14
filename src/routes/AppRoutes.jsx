import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import AdsPage from "../pages/AdsPage/AdsPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import AdDetailsPage from "../pages/AdDetailsPage/AdDetailsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AdSubmissionPage from "../pages/AdSubmissionPage/AdSubmissionPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Loader from "../components/Loader/Loader";
import { getAccessToken } from "../store/selectors/authSelectors";
import { URLs } from "../constants/constants";

const AppRoutes = ({ isAuthDataLoaded }) => {
    const accessToken = useSelector(getAccessToken);

    if (!isAuthDataLoaded) {
        return <Loader />;
    }

    return (
        <Routes>
            <Route path={URLs.ads} element={<AdsPage />} />
            <Route path={URLs.category} element={<CategoryPage />} />
            <Route path={URLs.aboutAd} element={<AdDetailsPage />} />
            <Route
                path={URLs.login}
                element={
                    <ProtectedRoute
                        hasAccess={!accessToken}
                        redirectUri={URLs.ads}
                    >
                        <LoginPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path={URLs.register}
                element={
                    <ProtectedRoute
                        hasAccess={!accessToken}
                        redirectUri={URLs.ads}
                    >
                        <RegisterPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path={URLs.profile}
                element={
                    <ProtectedRoute
                        hasAccess={accessToken}
                        redirectUri={URLs.login}
                    >
                        <ProfilePage />
                    </ProtectedRoute>
                }
            />
            <Route
                path={URLs.submitAd}
                element={
                    <ProtectedRoute
                        hasAccess={accessToken}
                        redirectUri={URLs.login}
                    >
                        <AdSubmissionPage />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Navigate to={URLs.ads} replace />} />
        </Routes>
    );
};

export default AppRoutes;
