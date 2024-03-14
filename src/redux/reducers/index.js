// Creat reducer for all project

import { combineReducers } from "@reduxjs/toolkit";

import categoryReducer from "./categoryReducer";

const reducers = combineReducers({
    category: categoryReducer,
});

export default reducers;