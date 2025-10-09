import React from "react";

const StatesSection = () => {
  return (
    <div className=" bg-gradient-to-r from-[#6031E3]  to-[#9055EE]">
    <div className="w-[99%] sm:w-[90%] md:w-[90%] lg:w-[75%] xl:w-[60%] mx-auto px-2 py-8">
      <h2 className="text-center text-3xl font-semibold text-white mb-10">
        Trusted By Millions, Built For You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-4 gap-8">
        {/* Total Downloads */}
        <div className=" text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold">Total Downloads</h3>
          <p className="text-3xl font-bold mt-4">29.6M</p>
          <p className="mt-2 text-sm">21% More Than Last Month</p>
        </div>
        {/* Total Reviews */}
        <div className=" text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold">Total Reviews</h3>
          <p className="text-3xl font-bold mt-4">906K</p>
          <p className="mt-2 text-sm">46% More Than Last Month</p>
        </div>
        {/* Active Apps */}
        <div className=" text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold">Active Apps</h3>
          <p className="text-3xl font-bold mt-4">132+</p>
          <p className="mt-2 text-sm">31 More Will Launch</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StatesSection;
