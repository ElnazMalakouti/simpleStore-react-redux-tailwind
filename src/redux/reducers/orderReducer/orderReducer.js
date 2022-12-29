import { createSlice } from "@reduxjs/toolkit";

const init = {
    orderList : [     
        {
            dressId : 1 ,
            color : 'Blue' , 
            size : 'Large' ,
            count : 1 , 
        },
        {
            dressId : 5 ,
            color : 'Red' , 
            size : 'X-Large' ,
            count : 2 , 
        }    
    ]
}

const orderReducer = createSlice({
    name : 'orderReducer',
    initialState : init , 
    reducers : {
        addDressOrder : (state,action) => {
            const temp = state.orderList.find(item => item.dressId === action.payload)

            if(temp){
                temp.count = temp.count + 1
            }else{
                state.orderList.push({
                    dressId : action.payload,
                    count : 1
                })
            }
        },
        removeDressOrder : (state,action) => {
            const temp = state.orderList.find(item => item.dressId === action.payload)

            if(temp){
                if(temp.count < 2){
                    state.orderList = state.orderList.filter(item => item.dressId !== action.payload)
                }else{
                    temp.count = temp.count - 1
                }
            }
        },
        submitOrder : (state,action) => {
            state.orderList = []
        }
    }
})

export const {addDressOrder,removeDressOrder,submitOrder} = orderReducer.actions
export default orderReducer.reducer