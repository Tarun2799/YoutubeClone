import React from 'react'

const ChatComponent = ({name, message}) => {
  return (
    <div className='flex gap-2 bg-slate-100 p-2 m-1 rounded-lg items-center justify-start'>
        <img src='/user.png' className='h-5' alt="user" />
        <span className='text-sm'><span className='font-bold'>{name}</span> {message}</span>
        {/* <span className='text-wrap'>{message}</span> */}
    </div>
  )
}

export default ChatComponent