import React from "react";
import Hero from "../../pages/Home/Hero";
import { AppLogo } from "../../utils/assets";

const index = () => {
  return (
    <div className="bg-hero">
      <div className="sm:grid sm:grid-cols-2 pt-10 px-10 items-center flex">
        {/* left */}
        <div className="">
          <img src={AppLogo} alt="" />
        </div>

        {/* right */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center">
            <ul className="flex gap-20 text-2xl text-white ">
              <li className="hover:text-orange cursor-pointer">Discover</li>
              <li className="hover:text-orange cursor-pointer">Gallery</li>
              <li className="hover:text-orange cursor-pointer">Reviews</li>
            </ul>
            <button className="text-white text-2xl items-center flex justify-center bg-orange rounded-xl p-3 w-36 h-12 hover:text-orange hover:bg-white hover:border-orange">
              LOGIN
            </button>
          </div>
        </div>
      </div>
      {/* hero section */}
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default index;
