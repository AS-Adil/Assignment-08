import React, { use, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import useAppsdata from "../hooks/useAppsdata";

import downloadImg from "../assets/icon-downloads.png";
import reviewImg from "../assets/icon-review.png";
import ratingImg from "../assets/icon-ratings.png";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getStoredApp, updateStoredApp } from "../Utility/LocalStorage";
import { InstallContext } from "../Layout/MainLayout";

const AppDetails = () => {

  // const [isInstalled, setIsInstalled] = useContext(InstallContext)

  const { id } = useParams();
  const { apps, loading } = useAppsdata();
  const app = apps.find((ap) => ap.id === Number(id));
//   console.log(app);




const [isInstalled, setIsInstalled] = useState(false)



 
useEffect(() => {
 const storedApp = getStoredApp()
 const isAvilable = storedApp.some(p => p.id ===Number(id))
 setIsInstalled(isAvilable)
 console.log('is avilable ',isAvilable);

}, [id])



console.log('is istalled ', isInstalled);





 const handleInstall = (app) =>{

    updateStoredApp(app)
    //  setIsInstalled(true)

 }



  if (loading)
    return (
      <p className="font-bold text-5xl text-center text-red-600">
        loading.......
      </p>
    );
  if (!app)
    return (
      <p className="font-bold text-5xl text-center text-red-600">
        Not Found.......
      </p>
    );

  
  return (
    <div className=" bg-[#E9E9E9]">
      <div className="border-b-1 border-gray-600 flex flex-col lg:flex-row lg:items-center py-6 gap-4 lg:gap-12 px-4  md:px-6 lg:px-15">
        <div>
          <img
            src={app.image}
            className="shadow-xl rounded-md scale-105"
            alt=""
          />
        </div>

        <div>
          {/* up  */}
          <div className="py-5">
            <h1 className="font-semibold text-3xl ">{app.title}</h1>
            <p className="space-x-1.5 font-semibold">
              <span className="text-gray-600">Developed by</span>
              <span className="text-[#632EE3]">{app.companyName}</span>
            </p>
          </div>

          {/* down  */}
          <div className="border-t-1 pt-5 border-gray-700">
            {/* down - up  */}
            <div className="flex flex-wrap sm:gap-32 gap-6">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img src={downloadImg} alt="" />
                  <p className="text-gray-600">Downloads</p>
                </div>
                <h1 className="text-2xl font-bold">{app.downloads} M</h1>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img src={ratingImg} alt="" />
                  <p className="text-gray-600">Average Ratings</p>
                </div>
                <h1 className="text-2xl font-bold">{app.ratingAvg}</h1>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <img src={reviewImg} alt="" />
                  <p className="text-gray-600">Total Reviews</p>
                </div>
                <h1 className="text-2xl font-bold">{app.reviews} k</h1>
              </div>
            </div>

            {/* down - down  */}
            <div className="pt-4">
              <button onClick={()=>handleInstall(app)} className="bg-[#00D390] px-14 py-2.5 rounded-md font-semibold text-white text-lg shadow-md hover:shadow-lg cursor-pointer ">
                Install Now ({app.size}GB)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-8  pr-2 md:px-4 lg:px-13">
        <h2 className="text-lg font-semibold mb-3 ml-2 ">Ratings</h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={app.ratings}
            layout="vertical"
            margin={{ top: 3, right: 30, left: 0, bottom: 3 }}
          >
            <XAxis type="number" />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 14 }}
              width={80}
            />
            <Tooltip />

            <Bar dataKey="count" fill="#f97316" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* description  */}
      <div className="space-y-4 py-4 border-t-1 border-gray-700 px-4  md:px-6 lg:px-15">
        <h1 className="text-4xl font-bold ">Description</h1>

        <p className="text-lg text-gray-600 text-justify">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
