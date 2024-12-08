import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { PiShareFatLight, PiDotsThreeBold } from 'react-icons/pi';
import { GoDownload } from 'react-icons/go';

const WatchPage = () => {

    const [ watchPageVideo, setWatchPageVideo ] = useState(null);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    const getWatchPageVideo = async () => {

      try{
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyCnUh_gTtmd5W6owW46RsuWBijtNcHzGdY&maxResults=1&id=${searchParams.get("v")}`);
        const json = await data.json();   
        console.log(json.items[0]); 
        setWatchPageVideo(json?.items[0]);
      } catch (error) {
        console.log(error);
      }
        
    }

    useEffect(() => {
        getWatchPageVideo();
    },[]);

    useEffect(()=>{
        dispatch(closeMenu());
    })

  return (
    <div className='flex flex-col w-full'>
      <div className='p-10 flex gap-2 w-full'>

        {/* left side our video */}
        <div>
          <iframe className='rounded-xl' width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <h1 className='font-bold text-2xl mt-2'>{watchPageVideo?.snippet?.title}</h1>
          
          {/* information about video */}
          <div className='outerConatiner'>
            <div className='innerContainer flex justify-between items-center'>
              {/* left side channel info */}
                <div className='channelname flex gap-3  items-center p-2'>
                  <img src='/user.png' className='h-8' alt="user" />
                  <div className='flex flex-col'>
                    <h4 className='font-semibold text-sm'>{watchPageVideo?.snippet?.channelTitle}</h4>
                    <h6 className='text-xs text-gray-400'>suscribe count</h6>
                  </div>
                  <button className='px-4 py-1 font-medium text-sm text-white rounded-full bg-black'>Subscribe</button>
                </div>
                {/* right side video info : like share */}
                <div className='flex justify-between items-center p-2'>
                  <div className='mx-2 my-2 flex items-center justify-center gap-1 bg-slate-100 rounded-full px-4 py-1 cursor-pointer'>
                    <AiOutlineLike size={20}/>
                    <p>Like</p>
                    <span className='text-lg mx-2'>|</span>
                    <p className='transform scale-x-[-1]'><AiOutlineDislike size={20}/></p>
                    </div>
                  <div className='mx-2 my-2 flex items-center justify-center gap-2 bg-slate-100 rounded-full px-4 py-1 cursor-pointer'>
                    <PiShareFatLight size={20}/> <span>Share</span> </div>
                  <div className='mx-2 my-2 flex items-center justify-center gap-2 bg-slate-100 rounded-full px-4 py-1 cursor-pointer'>
                    <GoDownload size={20}/>
                    <span>Download</span></div>
                  <div className='mx-2 my-2 flex items-center justify-center bg-slate-100 rounded-full px-2 py-2 cursor-pointer'><PiDotsThreeBold size={22}/></div>
                </div>
            </div>
          </div>
        </div>

        {/* right side live chat */}
        <div className='w-full'>
          <LiveChat/>
        </div>


      </div>

      {/* comments */}
      <div>
        <div className='w-[70%] bg-slate-50 flex'>
          <CommentsContainer/>
        </div>
        <div className='bg-slate-200 w-[30%]'>
            <div></div>
        </div>
      </div>

    </div>
  )
}

export default WatchPage