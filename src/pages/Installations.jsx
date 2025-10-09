import React, { useState } from "react";
import { getStoredApp } from "../Utility/LocalStorage";


import InstalledCard from "../Components/InstalledCard";
const Installations = () => {
  const [installedApps, setInstalledApps] = useState(getStoredApp());

  const [sortOrder, setSortOrder] = useState("none");

  const sortedApps = (() => {
    if (sortOrder === "download-desc") {
      const sortedList = [...installedApps].sort(
        (a, b) => b.downloads - a.downloads
      );

      return sortedList;
    } else if (sortOrder === "download-asc") {
      const sortedList = [...installedApps].sort(
        (a, b) => a.downloads - b.downloads
      );

      return sortedList;
    } else {
      return installedApps;
    }
  })();

  return (
    <div className="bg-[#E9E9E9] px-2 sm:px-4 lg:px-16">
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center ">Your Installed Apps</h1>
        <p className="text-lg text-gray-600 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className=" flex justify-between items-center py-5">
        <div>
          <h1 className="text-xl font-semibold ">
            {sortedApps.length} Apps found
          </h1>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option disabled value="none">
                Sort by Download
              </option>

              <option value="download-desc">High-&gt;Low</option>

              <option value="download-asc">Low-&gt;High</option>
            </select>
          </label>
        </div>
      </div>

      <div className="flex flex-col  gap-2 pb-6 min-h-[30vh]">
        {sortedApps.map((app) => (
          <InstalledCard
            key={app.id}
            app={app}
            setInstalledApps={setInstalledApps}
          ></InstalledCard>
        ))}
      </div>
    </div>
  );
};

export default Installations;
