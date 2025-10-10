import React from 'react';
import errorImg from '../assets/error-404.png' 
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
const InvalidRoute = () => {
    return (

        <div className='flex flex-col min-h-screen'>
     <Navbar></Navbar>

        <div className='bg-[#E9E9E9] flex flex-col  items-center justify-center min-h-[60vh] gap-3 py-7 px-2'>
            <div>
                <img src={errorImg} alt="" />
            </div>

            <h1 className='text-4xl font-bold text-center'>Not Found</h1>

            <p className='text-lg font-semibold text-gray-600 text-center'>Sorry, the page you are looking for might be removed, renamed, or is temporarily unavailable.</p>

           

            <Link className='bg-[#7340E7] text-white mx-auto px-15 mt-1.5 font-semibold shadow-md hover:shadow-xl py-2 rounded-md' to={"/"}>Back to Home</Link>
            


            

        </div>

<Footer></Footer>




        </div>
    );
};

export default InvalidRoute;