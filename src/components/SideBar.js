import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { Scrollbars } from "react-custom-scrollbars-2";
import { GrHistory } from "react-icons/gr";
import { LiaHomeSolid } from "react-icons/lia";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import {  AiOutlineLike } from 'react-icons/ai';
import { CiStreamOn } from "react-icons/ci";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GiHanger } from "react-icons/gi";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlineFeedback, MdOutlineExplore, MdOutlineKeyboardArrowRight   } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import { IoMdSettings  } from "react-icons/io";


const SideBar = ()=>{

    const isMenuOpen = useSelector(state => state.app.isMenuOpen); //we are suscribing to the specific part of our store.

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    // early return, or we can use ternary operator diretly.
    if(!isMenuOpen) return null;

    return (
        // <div className="p-5 min-w-2/12 h-full overflow-y-auto">
        <div className="fixed top-0 left-0 h-full w-64 px-5 py-4 bg-white shadow-md overflow-y-auto z-20 ">
            <div className="flex gap-4 mb-4">
                <img className="h-8 cursor-pointer hover:bg-slate-100" src="/hamburger.png" alt="menu" onClick={toggleMenuHandler}/>
                <img className="h-7" src="/logo'.png" alt="Logo"/>
            </div>
            <ul className="py-2">
            <Link to="/"><li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"> <LiaHomeSolid/>Home</li></Link>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2" ><SiYoutubeshorts/>Shorts</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2" ><MdOutlineSubscriptions/>Subscriptions</li>
            </ul>
            <hr />
            <br />
            <h1 className="font-bold">You {">"}</h1>
            <ul className="py-2">
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><GrHistory/>History</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><CgPlayList/>Playlists</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><MdOutlineWatchLater/>Watch Later</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><AiOutlineLike/>Liked Videos</li>
            </ul>
            <hr />
            <br /> 
            <h1 className="font-bold flex items-center gap-2"><MdOutlineExplore />Explore</h1>
            <ul className="py-2">
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2">Trending</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><HiOutlineShoppingBag/>Shopping</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><IoMusicalNotesOutline/>Music</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2" ><CiStreamOn/>Live</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><SiYoutubegaming/>Gaming</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><IoNewspaperOutline/>News</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><MdOutlineSportsBasketball/>Sports</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><GiHanger/>Fashion & Beauty</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><HiOutlineLightBulb/>Courses</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><MdPodcasts/>Podcasts</li>
            </ul>
            <hr />
            <br />
            <h1 className="font-bold">Made from YouTube</h1>
            <ul className="py-2">
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900">YouTube Premium</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900">YouTube Music</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900">YouTube Kids</li>
            </ul>
            <hr />
            <br />
            <h1 className="font-bold flex items-center gap-2"><IoMdSettings />Settings</h1>
            <ul className="py-2">
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><CiFlag1/>Report History</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><TfiHelpAlt/>Help</li>
                <li className="py-1 px-2 hover:bg-gray-200 rounded-md text-slate-900 flex items-center gap-2"><MdOutlineFeedback/>Send feedback</li>
            </ul> 
            <hr />
            <br />
            <ul>
                <li className="text-slate-600 text-sm">About Press Copyright</li>
                <li className="text-slate-600 text-sm">Contact us Creators</li>
                <li className="text-slate-600 text-sm">AdvertiseDevelopers</li>
                <br/>
                <li className="text-slate-600 text-sm" >Terms Privacy Policy & Safety</li>
                <li className="text-slate-600 text-sm" >How YouTube works</li>
                <li className="text-slate-600 text-sm" >Test new features</li>
                <br/>
                <hr/>
                <br/>
                <li className="text-slate-600 text-sm">© 2024 YouTube</li>
            </ul>
        </div>
    );
};

export default SideBar;