import ProductsReducer from "./ProductsReducer/ProductsReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const combinedReducers = combineReducers({
    products : ProductsReducer
})

const persistedReducers = persistReducer({key:'rootPersist',storage,whitelist:['']},combinedReducers)
export default persistedReducers