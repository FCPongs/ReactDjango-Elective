import LogoImage from '../Images/Logo.png';

import {Link} from 'react-router-dom';



import React from 'react'

const NavBar = () => {
  return (
    <>
    {/** Div wrapper    */}

    <div className='flex items-center justify-between bg-[#ffffff] shadow-xl h-24'>

      <div className="flex items-center"> 
        <img src={LogoImage} alt="Logo" className='h-20 ml-5 mr-5' />
        <h1 className='text-2xl font-bold'>FurFinder</h1>
        </div>

        <ul className='flex text-l '>
            <li className='p-4 hover:underline'>
                <Link to="/">Home</Link>
            </li>
            <li className='p-4 hover:underline'a href="#">
            <a href="#">About us</a>
            </li>
                <li className='p-4 hover:underline'>
            <a href="#">Contact us</a>
            </li>
                <li className='p-4 hover:underline'>
                <a href="#">Find a pet</a>
            </li>
            <li className='p-4 hover:underline'>
            <a href="#">Manage pets</a>
            </li>
            
        </ul>

        <div className="flex items-center">
        <form action="" className='ml-10 mr-10'>
            <input type="text" name="search" placeholder="Search" className='rounded-md h-9 w-34 border-b-2 border-indigo-500 outline-none'/>
        </form>
          <h1 className="mr-5">O</h1>
        </div>

    </div>
    </>
  )
}

export default NavBar