import { createSlice } from "@reduxjs/toolkit";

const init = {
    orderList : [       
    ]
}

const orderReducer = createSlice({
    name : 'orderReducer',
    initialState : init , 
    reducers : {
        addDressOrder : (state,action) => {
            const temp = state.orderList.find(item => {
                if(item.dressId === action.payload.dressId && item.color === action.payload.color && item.size === action.payload.size && item.count === action.payload.count){
                    return item
                }                
            })
            
            if(temp){
                temp.count = +temp.count + 1
            }else{
                state.orderList.push({
                    dressId : action.payload.dressId,
                    color : action.payload.color ,
                    size : action.payload.size ,
                    count : action.payload.count
                })
            }
        },
        subDressOrder : (state,action) => {
            const temp = state.orderList.find(item => item.dressId === action.payload)

            if(temp){
                if(temp.count < 2){
                    state.orderList = state.orderList.filter(item => item.dressId !== action.payload)
                }else{
                    temp.count = temp.count - 1
                }
            }
        } , 
        removeDressOrder : (state,action) => {
            // const temp = state.orderList.find(item => item.dressId === action.payload)             
            state.orderList = state.orderList.filter(item => item.dressId !== action.payload)                                      
        },
        submitOrder : (state,action) => {
            state.orderList = []
        }
    }    
})

export const {addDressOrder,removeDressOrder,subDressOrder,submitOrder} = orderReducer.actions
export default orderReducer.reducer