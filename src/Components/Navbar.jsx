import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { useResultContext } from '../Context/ResultProvider'
import { Link } from 'react-router-dom'

export const Navbar = ({ dark, setDark }) => {

  const { setSearchTerm } = useResultContext();
  const [tempSearch, setTempSearch] = useState("")

  const setSearch = () => {
    setSearchTerm(tempSearch);
  }

  return (
    <>
    <header className='flex items-center justify-between flex-col md:flex-row gap-2 p-4 border-b-2 dark:border-gray-700 border-gray-400 mb-1 '>
        <nav className='px-2 flex items-center gap-3 md:gap-10 flex-col md:flex-row'>
            <div className="logo">
                <img src={logo} alt="logo" 
                className='w-24'
                />
            </div>
            <div className='w-full flex flex-col items-center md:flex-row gap-2'>

              <input 
              type="text" 
              placeholder='Search Here'  
              className='py-1.5 px-2 shadow-2xl dark:text-gray-900 rounded-md mx-2 w-[100%] max-w-[500px] outline-none'
              value={tempSearch}
              onChange={(e)=> {setTempSearch(e.target.value)}}
              />
              <button className='bg-purple-600 flex-1 w-[100%] text-white p-2 px-4 rounded-md cursor-pointer' onClick={() => {setSearch()}}>Search</button>
            </div>
        </nav>
        <button 
        onClick={() => setDark(prev => !prev)}
        className='dark:bg-gray-600 bg-gray-300 px-3 py-2 absolute right-3 top-4 md: rounded-md cursor-pointer shadow-2xl'
        ><i className={`fas ${dark ? 'fa-sun' : 'fa-moon'}`}></i></button>
        
    </header>
    <aside className='mx-5 flex items-center md:justify-start justify-center gap-4 cursor-pointer'>
      <Link to="/search">
      <button className='p-2 bg-purple-500 text-white rounded-md px-4 shadow-2xl' >All</button>
      </Link>
      <Link to="/imagesearch">
      <button className='p-2 bg-purple-500 text-white rounded-md px-4 shadow-2xl'>Images</button>
      </Link>
    </aside>
    
    </>
  )
}
