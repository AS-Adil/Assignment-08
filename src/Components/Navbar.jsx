import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { VscGithub } from 'react-icons/vsc';

const Navbar = () => {

    const tabs = <>
           <NavLink className='same text-lg' to={'/'}>Home</NavLink>
       <NavLink className='same text-lg' to={'apps'}>Apps</NavLink> 
       <NavLink className='same text-lg' to={'Installations'}>Installations</NavLink>
    </>

    return (
<div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 lg:px-16">



  <div className="navbar-start ">
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
    <Link to={"/"} className=" py-2 whitespace-nowrap  font-semibold rounded-full text-[#632EE3] cursor-pointer  text-xl flex gap-1 items-center">
    <img src={logo} className='w-11' />
    HERO.IO</Link>
  </div>





          <div className=" navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-5">

              {tabs}



    </ul>
  </div>


  


  <div className="navbar-end space-x-2.5">

      

    <a href='https://github.com/' target='blank'  className="shadow-sm hover:shadow-md px-4 py-2 font-semibold rounded-md text-lg text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]  flex items-center gap-1.5"> <VscGithub size={20} className=' rounded-full bg-white text-black mt-1'></VscGithub>Contribute</a>
  
    
  </div>

</div>


    );
};

export default Navbar;