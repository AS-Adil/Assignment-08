import React from 'react';

import Img from '../assets/App-Error.png'
import { Link } from 'react-router';



const NoAppsFound = () => {
    return (
        <div className='bg-[#E9E9E9] flex flex-col gap-3 items-center justify-center'>
            <div>
                <img src={Img} alt="" />
            </div>
            <div className='pb-7'>
                <h1 className='text-center text-4xl font-bold'>No App Found</h1>
            </div>

        </div>
    );
};

export default NoAppsFound;