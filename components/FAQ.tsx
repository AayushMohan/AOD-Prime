import Image from "next/image";
import React from "react";

const FAQ = () => {
  return (
    <div className="h-screen flex-col">
      <div className="mt-16 mx-28">
        <h1 className="text-5xl text-[#EAE2B7]">Detects & Prevents</h1>
      </div>
      <div>
        <Image
          src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/10/11/Pictures/noida-stray-cattle_e2251440-0b65-11eb-bbb0-40eddbf766cc.jpg"
          alt="cow"
          width={450}
          height={450}
          className="rounded-lg mt-10 grayscale mx-32"
        />
      </div>
    </div>
  );
};

export default FAQ;
