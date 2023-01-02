import { createSlice } from "@reduxjs/toolkit";

const init = {
    favoriteDressId : [        
    ]
}

const favoritesReducer = createSlice({
    name : 'favoritesReducer' ,
    initialState : init , 
    reducers : {
        changeFavoriteMode : (state,action) => {
            const temp = state.favoriteDressId.find(item => item === action.payload)

            if(temp){
                state.favoriteDressId = state.favoriteDressId.filter(item => item !== action.payload)
                console.log("!!!!")
            }else{
                state.favoriteDressId.push(action.payload)
            }
        },        
    }
})

export const {changeFavoriteMode} = favoritesReducer.actions
export default favoritesReducer.reducer