import Image from "next/image";
import React from "react";

const FAQ = () => {
  return (
    <div className="min-h-screen flex-col mt-10">
      <div className="mt-28 mx-28">
        <h1 className="text-5xl text-[#EAE2B7]">Detects & Prevents</h1>
      </div>
      <div className="flex">
        <Image
          src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/10/11/Pictures/noida-stray-cattle_e2251440-0b65-11eb-bbb0-40eddbf766cc.jpg"
          alt="cow"
          width={550}
          height={550}
          className="rounded-lg mt-10 grayscale ml-32"
        />

        <div className="flex-col mx-18">
          <div className="font-sans mt-10 mx-10">
            <h2 className="text-[#EAE2B7] mb-3 text-xl">Instant Detection</h2>
            <span className="text-base font-light">
              Revolutionary technology identifies obstacles in real-time
            </span>
          </div>
          <div className="font-sans mt-10 mx-10">
            <h2 className="text-[#EAE2B7] mb-3 text-xl">Smart Prevention</h2>
            <span className="text-base font-light">
              Reliable system works day and night to keep you safe
            </span>
          </div>
          <div className="font-sans mt-10 mx-10">
            <h2 className="text-[#EAE2B7] mb-3 text-xl">Save Wildlife</h2>
            <span className="text-base font-light">
              Protect local fauna by preventing dangerous collisions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
