import React from 'react'
import Logo from '../movie-icon.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-red-200 flex  border pl-3 py-4 space-x-8 items-center'>
        <img className='bg-red-200 rounded-full w-[50px]' src={Logo}/>
        <Link to='/' className='text-blue-500 text-3xl font-bold'>Movies</Link>
        <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
        
    </div>
  )
}

export default NavBar