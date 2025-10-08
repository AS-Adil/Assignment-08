import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import raingImg from '../assets/icon-ratings.png'
import { Link } from 'react-router';

// card lg:card-side

const Card = ({app}) => {
    return (
      <Link to={`/appDetails/${app.id}`}>
<div className="rounded-md hover:scale-103 transition ease-in-out bg-[#F8F8F8] shadow-md">
  <figure className='p-5'>
    <img
      src={app.image}
      className='w-full  rounded-md hover:shadow-md'
      alt="Album" />
  </figure>
  <div className="">
    <h2 className="font-semibold text-lg text-center">{app.title}</h2>


    <div className=" flex justify-between p-5">

   <div className='flex items-center gap-2 bg-[#DDE8E2] rounded-md shadow-xs py-1 px-2'>
    
      <div>
        <img src={downloadImg} className="w-4" />  
      </div>

    <h1 className='text-[#5ADFB1] font-semibold'><span>{app.downloads}M</span> </h1>
   </div>

   <div className='flex items-center gap-2 bg-[#f8e3cf] rounded-md shadow-xs py-1 px-2'>
    
      <div>
        <img src={raingImg} className="w-4" />  
      </div>

    <h1 className='text-[#FF8F1E] font-semibold'><span>{app.ratingAvg}</span> </h1>
   </div>






    </div>
  </div>
</div>
</Link>
    );
};

export default Card;