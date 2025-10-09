import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { getStoredApp, removeFromStorage } from "../Utility/LocalStorage";

const InstalledCard = ({ app, setInstalledApps }) => {
  const { image, title, size, id, ratingAvg, downloads } = app || {};

  const handleUninstall = (id) => {
    removeFromStorage(id);
    setInstalledApps(getStoredApp());
  };

  return (
    <div className="bg-[#FFFFFF] py-2 flex justify-between items-center shadow-md rounded-xl px-3">
      <div className="flex items-center">
        <div>
          <img src={image} className="w-15 rounded-xl shadow-xs" alt="" />
        </div>

        <div className="pl-2 ">
          <h1 className="font-semibold">{title}</h1>

          <div className="flex gap-3 items-center ">
            <div className="flex items-center gap-1 ">
              <img src={downloadImg} className="w-3.5" alt="" />

              <h1 className=" text-green-600 font-semibold">{downloads}M</h1>
            </div>
            <div className="flex items-center gap-1 ">
              <img src={ratingImg} className="w-3.5" alt="" />

              <h1 className=" text-[#FF8811] font-medium">{ratingAvg}</h1>
            </div>
            <div className="flex items-center gap-0.5  font-semibold text-gray-500">
              <h1>{size}</h1>
              <h1>GB</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => handleUninstall(id)}
          className="bg-[#00D390] px-8 py-2 rounded-md font-semibold text-white text-lg shadow-md hover:shadow-lg cursor-pointer "
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledCard;
