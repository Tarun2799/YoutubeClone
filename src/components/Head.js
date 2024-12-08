import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";
import "../index.css";
import { CiSearch } from "react-icons/ci";
import { setCategory } from "../utils/appSlice";


const Head = () =>{

    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false); // for onFocus and blur the input 
    const [selectedItem, setSelectedItem] = useState(-1); // for handling the key events on input
    // const { category } = useSelector((store) => store.app);

    const searchCache = useSelector(store => store.search);

    useEffect(()=>{

        const timer = setTimeout(() =>{ 
            if(searchCache[searchQuery]){
                setShowSuggestions(searchCache[searchQuery]);
            }else{
                getSearchSuggestions();
                console.log(searchQuery);
            }
            }, 200);
        return () => clearTimeout(timer);

    },[searchQuery]);

    const getSearchSuggestions = async () => {
        if(searchQuery !== ""){
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await data.json();
            setSearchSuggestions(json[1]);
            // console.log(json[1]);

            // update the chache
            dispatch(cacheResults(
                {
                    [searchQuery] : json[1],
                }
            ))
        }
    }

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const handleKeyDown = (e) => {
        // console.log(e.key); // Logs the key pressed for debugging purposes.
    
        if (searchSuggestions.length > 0) { // Ensure there are suggestions available to navigate.
            if (e.key === "ArrowUp") {
                // If the current selection is at the first item (index 0), 
                // wrap around to the last item. Otherwise, move up (decrease index).
                setSelectedItem((prev) =>
                    prev <= 0 ? searchSuggestions.length - 1 : prev - 1
                );
            } else if (e.key === "ArrowDown") {
                // If the current selection is at the last item (last index),
                // wrap around to the first item (index 0). Otherwise, move down (increase index).
                setSelectedItem((prev) =>
                    prev >= searchSuggestions.length - 1 ? 0 : prev + 1
                );
            } else if (e.key === "Enter" && selectedItem >= 0) {
                // If the Enter key is pressed and an item is selected:
                // Perform the desired action, such as setting the search query 
                // to the value of the currently selected suggestion.
                setSearchQuery(searchSuggestions[selectedItem]);
                setShowSuggestions(false);
                dispatch(setCategory(searchSuggestions[selectedItem]));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchQuery !== ""){
            console.log(searchQuery);
            dispatch(setCategory(searchQuery));
        }else{
            console.log("Please enter something");
        }
    }
    
    const handleSearchQuery = (index)=>{
        console.log(index);
        setSearchQuery(searchSuggestions[index]);
        dispatch(setCategory(searchSuggestions[index]));
    }

    return (
        <div className="grid grid-flow-col shadow-lg px-5 py-4 w-full">
            <div className="flex gap-4 col-span-1">
                <img className="h-8 cursor-pointer hover:bg-slate-100" src="/hamburger.png" alt="menu" onClick={toggleMenuHandler}/>
                <img className="h-7" src="/logo'.png" alt="Logo"/>
            </div>
            <div className="col-span-10 px-10 relative">
                <div className="flex items-center">
                    <form className="w-1/2 flex items-center" onSubmit={handleSubmit}>
                        <input className="w-full border border-gray-300 px-5 py-1 rounded-l-full" type="text" placeholder="Search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} onKeyDown={handleKeyDown}/>
                        <button className="border border-gray-300 px-5 py-2 rounded-r-full bg-gray-300" type="submit"><CiSearch size={17}/></button>
                    </form>
                </div>
                { showSuggestions && <div className="w-[46.5%] absolute z-10 bg-white p-5 shadow-lg rounded-lg border border-gray-200">
                    <ul>
                        { searchSuggestions.map((suggestion, index) => (
                            <li className={`px-2 py-1 flex items-center gap-2 rounded-lg hover:bg-slate-200 ${selectedItem === index ? "active" : ""}`} key={suggestion} onMouseDown={()=>handleSearchQuery(index)} onMouseOver={()=>setSelectedItem(index)}><CiSearch/> {suggestion}</li>
                        ))}
                    </ul>
                    <p className="text-xs text-slate-500 absolute right-0 px-3 pb-3">Report search Prediction</p>
                </div>}
            </div>
            <div className="col-span-1">
                <img className="h-8 cursor-pointer" src="/user.png" alt="user"/>
            </div>
        </div>
    );
};

export default Head;