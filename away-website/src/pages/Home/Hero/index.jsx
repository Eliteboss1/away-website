import React from "react";
import { Arrow, Right } from "../../../utils/assets";


const index = () => {
  return (
    <div className="sm:pt-60 pt-40 px-16">
      {/* wrapper */}
      <div className="flex flex-col py-14">
        <span className="sm:text-9xl text-6xl text-white font-bold">Experience</span>
        <span className="sm:text-9xl text-6xl text-white font-bold">Africa</span>
        <button className="rounded-xl bg-orange text-black p-3 sm:w-80 sm:h-20 w-50 h-16 sm:text-3xl text-2xl mt-5 flex justify-center items-center">
          BOOK A TRIP <img src={Right} alt="" className="pl-4 sm:w-max w-0" />
        </button>
      </div>
      <div className="flex items-center jusitify-center">
       
      </div>
    </div>
  );
};


export default index;
