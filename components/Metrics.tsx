import React from "react";

const Metrics = () => {
  return (
    <div className="flex-row h-screen mx-28">
      <div className="flex items-center font-sans text-[#F77F00]">
        <div className="p-40 mx-10 bg-[#0D0D0D] rounded-3xl text-center">
          <h2>1.2</h2>
          <span>Million Collisions</span>
        </div>
        <div className="p-40 mx-10 bg-[#0D0D0D] rounded-3xl text-center">
          <h1>3000</h1>
          <span>Lives Saved</span>
        </div>
        <div className="p-40 mx-10 bg-[#0D0D0D] rounded-3xl text-center">
          <h1>77.8%</h1>
          <span>Accuracy</span>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
