import React from 'react';
import { GOOGLE_API_KEY } from '../utils/Constants';

const VideoCard = ({info}) => {
    // console.log(info)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails } = snippet;


    const formatViews = (views)=>{
      if(views){ // if view property is present in the object( catgory case)
        if(views >= 1000000){
          return (views / 1000000).toFixed(1) + "M";
        }else if( views >= 1000){
          return (views / 1000).toFixed(1) + "K";
        }
        return views.toString();
      }
      
    }


  // return (
  //   <div className='p-2 m-2 w-72 h-[19rem]  rounded-lg'>
  //       <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail'/>
  //       <ul className='m-1'>
  //           <li className='font-bold text-sm '>{title}</li>
  //           <li className=' text-gray-600'>{channelTitle}</li>
  //           <li className='text-gray-400 text-sm'>{formatViews(statistics.viewCount)} views</li>
  //       </ul>
  //   </div>
  // )


  return (
    <div className="p-2 m-2 w-full sm:w-72 lg:w-64 xl:w-72 max-w-[275px] h-auto rounded-lg bg-white shadow-md">
      <img className="rounded-lg w-full h-[150px] object-cover" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="m-1">
        <li className="font-bold text-sm truncate">{title}</li>
        <li className="text-gray-600 text-xs">{channelTitle}</li>
        {statistics?.viewCount && <li className="text-gray-400 text-xs">{formatViews(statistics?.viewCount)} views</li>}
      </ul>
    </div>
  );
}

export default VideoCard