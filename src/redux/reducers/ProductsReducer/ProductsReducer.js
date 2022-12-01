import { createSlice } from "@reduxjs/toolkit";

const init = [

]


const ProductsReducer = createSlice({
    name : "ProductsReducer",
    initialState : init,
    reducers : {
        add : (state,action) => {
            console.log("action set")
        }
    }
})

export const {add} = ProductsReducer.actions
export default ProductsReducer.reducer