import ProductsReducer from "./ProductsReducer/ProductsReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import orderReducer from "./orderReducer/orderReducer";

const combinedReducers = combineReducers({
    products : ProductsReducer,
    order : orderReducer
})

const persistedReducers = persistReducer({key:'rootPersist',storage,whitelist:['order']},combinedReducers)
export default persistedReducers