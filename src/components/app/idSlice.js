import { createSlice } from "@reduxjs/toolkit";

const idSlice=createSlice({
    name: "id",
    initialState:{
        value:"",
    },
    reducers:{
        updateId:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const {updateId}=idSlice.actions;
export default idSlice.reducer;