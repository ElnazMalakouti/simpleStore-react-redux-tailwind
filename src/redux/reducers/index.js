import ProductsReducer from "./ProductsReducer/ProductsReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import orderReducer from "./orderReducer/orderReducer";
import favoritesReducer from "./favoritesReducer/favoritesReducer";

const combinedReducers = combineReducers({
    products : ProductsReducer,
    order : orderReducer,
    favorites : favoritesReducer
})

const persistedReducers = persistReducer({key:'rootPersist',storage,whitelist:['order' , 'favorites']},combinedReducers)
export default persistedReducers