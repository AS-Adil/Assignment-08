
import React from "react";
import logoImg from '../assets/logo.png'


const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] px-1.5 gap-2">
      <h1 className="text-6xl font-bold">L</h1>

    <img
    className="w-12 h-12 rounded-full animate-spin"
    src={logoImg} alt="" />

    <h1 className="text-6xl font-bold tracking-wide">oading...</h1>

    </div>
  );
};

export default Loader;
  