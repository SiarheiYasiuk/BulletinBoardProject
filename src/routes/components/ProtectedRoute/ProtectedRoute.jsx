import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, hasAccess, redirectUri }) => {
    if (!hasAccess) {
        return <Navigate to={redirectUri} />;
    }

    return children;
};

export default ProtectedRoute;
