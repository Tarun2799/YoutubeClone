import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = ()=>{

    const isMenuOpen = useSelector(state => state.app.isMenuOpen);

    return (
        <div className="flex w-full h-full">
            <SideBar/>
            <div className={`flex-1 ${isMenuOpen ? "ml-64 w-full" : "ml-0 w-full"}`}>
            {/* This will shift the content based on the sidebar visibility */}
            <Outlet/>
            </div>
        </div>
    );
};

export default Body;