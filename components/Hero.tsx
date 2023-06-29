import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <h1 className="text-7xl text-center mx-10 mt-80 px-80 text-[#FCBF49]">
          Drive Safe, Save Wildlife
        </h1>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="px-4 py-3 m-4 rounded-lg bg-[#EAE2B7] text-black">
          Learn More
        </button>
        <button className="px-4 py-3 m-4 rounded-lg bg-[#FCBF49] text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
