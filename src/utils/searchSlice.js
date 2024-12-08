import {createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{}, // as an empty object
    reducers:{
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload); //action.payload is an object.
        },
    }
})

export const { cacheResults } = searchSlice.actions; 
export default searchSlice.reducer;