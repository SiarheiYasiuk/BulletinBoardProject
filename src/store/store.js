import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import authDataReducer from "./reducers/authDataReducer";
import adsReducer from "./reducers/adsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authDataReducer,
    ads: adsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
