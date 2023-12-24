/* eslint-disable no-unused-vars */
import React from 'react'
import searchIcon from '../assets/Search-icon.svg'

const Search = () => {
  return (
    <div className='p-2 bg-white flex justify-between items-center shadow rounded-lg dark:bg-blueBlack' >
      <div className='flex gap-3 ml-2'>
        <img src={searchIcon} alt='search icon' className='w-[24px] h-[24px]'/>
        <input className='border-0 outline-none placeholder:text-gray-200 w-[390px] text-[16px] dark:bg-transparent dark:placeholder:text-white' type='text' placeholder='Search Github username...' />
      </div> 
      <div>
        <button className='px-5 py-2 flex justify-center items-center text-white bg-primaryBlue rounded hover:bg-[#60ABFF] text- [13px] font-medium'>Submit</button>
      </div>
    </div>
  )
}

export default Search 
