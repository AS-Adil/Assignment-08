import React from "react";
import playStore from "../assets/playStore.png";
import appStore from "../assets/appStore.png";
import bannerImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="px-2 sm:px-4 lg:px-16">
        <div className="space-y-5 pt-15">
          <div className="space-y-5  text-5xl font-bold text-center">
            <h1>We Build</h1>
            <h1>
              <span className="text-[#864DEC]">Productive </span> Apps
            </h1>
          </div>

          <p className="w-[100%] sm:w-[80%] md:w-[70%] xl:w-[65%] mx-auto text-center text-gray-600 ">
            AppPulse , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact
          </p>

          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://play.google.com/store/games"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="px-9 py-3 transition ease-in-out cursor-pointer hover:bg-[#E2E2E2]
                 bg-white  hover:shadow-xl font-bold text-lg rounded-xl flex items-center gap-2"
                >
                  <img src={playStore} alt="Play Store" />
                  Play Store
                </button>
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="px-9 py-3 transition ease-in-out cursor-pointer hover:bg-[#E2E2E2]
                 bg-white  hover:shadow-xl font-bold text-lg rounded-xl flex items-center gap-2"
                >
                  <img src={appStore} alt="App Store" />
                  App Store
                </button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <img src={bannerImg} alt="" className="mx-auto mt-12" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
