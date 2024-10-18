import React from 'react'
import { FiSend } from "react-icons/fi";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type='text' placeholder='Send a message...' className='border text-sm rounded-lg block w-full p-2 text-white bg-gray-700'/>
            <button type='submit' className=' absolute inset-y-0 end-0 flex items-center pe-3'>
            <FiSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput