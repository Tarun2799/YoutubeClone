import React, {useEffect, useState} from 'react'
import { YOUTUBE_VIDEOS_API , YT_VIDEOS_BY_CATEGORY_API } from '../utils/Constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeVideos } from '../utils/appSlice';

const VideoContainer = () => {

  const isMenuOpen = useSelector(state => state.app.isMenuOpen);

  // const [videos, setVideos] = useState([]);
  const { videos , category} = useSelector( (store) => store.app);

  const dispatch = useDispatch();

  

  const getVideos = async () => {
    try{
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      // console.log(json)
      // setVideos(json.items);
      dispatch(setHomeVideos(json?.items));
    }catch(error){
      console.log(error);
    }
    
  }

  const getVideosByCategory = async (category) => {
    try{
      const data = await fetch(YT_VIDEOS_BY_CATEGORY_API+ `&q=${category}`);
      const json = await data.json();
      console.log(json)
      // setVideos(json.items);
      dispatch(setHomeVideos(json?.items));
    }
    catch(error){
      console.log(error);
    }
    
  }

  useEffect(()=>{
    if(category === "All"){
      getVideos();
    }else{
      getVideosByCategory(category);
    }

  }, [category]);


  return (
    // <div className={`w-full flex flex-wrap ${isMenuOpen ? "pl-8" : ""}`}>
    <div
      className={`w-full flex flex-wrap gap-4 ${
        isMenuOpen ? "pl-8" : "pl-0"
      }`}
    >
      {videos.map((item) => {
        return (
          <Link to={`/watch?v=${typeof item.id  === 'object' ? item.id.videoId : item.id}`} key={typeof item.id  === 'object' ? item.id.videoId : item.id} ><VideoCard  info={item} /></Link>
        )
      })}
    </div>
  )
}

export default VideoContainer