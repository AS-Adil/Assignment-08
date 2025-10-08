import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {

    const tabs = <>
           <NavLink className='same text-lg' to={'/'}>Home</NavLink>
       <NavLink className='same text-lg' to={'apps'}>Apps</NavLink> 
       <NavLink className='same text-lg' to={'Installations'}>Installations</NavLink>
    </>

    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-2 shadow">
    
             {tabs}
    
      </ul>
    </div>
    <Link to={"/"} className=" px-4 py-2 whitespace-nowrap  font-semibold rounded-full text-[#632EE3] cursor-pointer  text-xl flex gap-1 items-center">
    <img src={logo} className='w-11' />
    HERO.IO</Link>
  </div>


  


  <div className="navbar-end space-x-2.5">
    <ul className='hidden lg:flex gap-3 items-center'>

        {tabs}

    </ul>
    <Link to={'/'} className="shadow-sm hover:shadow-md px-4 py-2 font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-800">Visit Shop</Link>
  </div>
</div>
    );
};

export default Navbar;