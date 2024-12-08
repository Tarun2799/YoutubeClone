import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        videos: [],
        category: "All",
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state)=>{
            state.isMenuOpen = false;
        },
        setHomeVideos: (state, action)=>{
            state.videos = action.payload;
        },
        setCategory: (state, action)=>{
            state.category = action.payload;
        }
    }
});

export const  { toggleMenu, closeMenu, setHomeVideos, setCategory } = appSlice.actions;
export default appSlice.reducer;