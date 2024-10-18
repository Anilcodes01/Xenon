import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
        <button className='bg-gray-700 rounded-full p-1'>
            <IoSearch size={36} color='white' />
        </button>
    </form>
  )
}

export default SearchInput