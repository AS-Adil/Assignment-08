import React from 'react';
import notfoundImg from '../assets/App-Error.png'
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='bg-[#E9E9E9] flex flex-col  items-center justify-center min-h-[60vh] gap-3 py-7 px-2'>
            <div>
                <img src={notfoundImg} alt="" />
            </div>

            <h1 className='text-4xl font-bold text-center'>App Is Not Found</h1>

            <p className='text-lg font-semibold text-gray-600 text-center'>The app you are looking for does not exist or has been removed.</p>

     <Link className='bg-[#7340E7] text-white mx-auto px-23 mt-1.5 font-semibold shadow-md hover:shadow-xl py-2 rounded-md' to={"/"}>Back to Home</Link>

        </div>
    );
};

export default NotFound;