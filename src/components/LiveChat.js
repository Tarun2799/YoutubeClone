import React, { useEffect, useState } from 'react'
import ChatComponent from './ChatComponent'
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/chatSlice';
import { generateRandomName, getRandomSentence } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const chatMessages = useSelector( store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
        // Api polling: using fetch
            // console.log("Polling...")
            dispatch(addMessages({
                name: generateRandomName(),
                message: getRandomSentence(),
            }))
        }, 1500);

        // cleanup function
        return () => clearInterval(i);
    }, []);

  return (
    <>
        <div className="border border-black w-full h-[500px] p-2 rounded-md overflow-y-scroll flex flex-col-reverse" >
            {chatMessages.map((c, index) => (
                <ChatComponent name={c.name} message={c.message} key={index}/>
            ))}
        </div>
        <form className='flex gap-2 border border-black p-2 rounded-lg' onSubmit={(e) => {
            e.preventDefault();
            // console.log(liveMessage);
            dispatch(addMessages({name: "Tarun J", message: liveMessage}));
            setLiveMessage("");
            }}>
            <input className=' w-96 p-2 rounded-md' type="text" placeholder='Enter your message' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)}/>
            <button className='border border-black px-2 py-1 rounded-md' type='submit'>➡️</button>
        </form>
    </>
  )
}

export default LiveChat;