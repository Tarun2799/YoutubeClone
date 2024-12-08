import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";


const MainContainer = ()=>{

    const isMenuOpen = useSelector(state => state.app.isMenuOpen);
    // <div className={isMenuOpen ? "w-10/12" : "w-full"}>

    return (
        <div className={`${ isMenuOpen ? "lg:w-10/12" : "w-full"} flex-1 transition-all ease-in-out duration-300 `}>
            <ButtonList/>
            <VideoContainer/>
        </div>
    );
};

export default MainContainer;