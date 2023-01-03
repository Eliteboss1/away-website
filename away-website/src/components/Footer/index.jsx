import React from "react";
import { AppLogoWhite, Facebook, Instagram, Twitter } from "../../utils/assets";

const index = () => {
  return (
    <div className="bg-black">
      {/* wrapper */}
      <div className="flex px-10 sm:flex-row flex-col">
        {/* left side */}
        <div className="flex-1">
          <img src={AppLogoWhite} alt="" />
        </div>

        {/* right side */}
        <div className="flex-[4]">
          <div className="grid sm:grid-cols-4 grid-row gap-5">
            {/* General */}
            <div className="text-white sm:mt-0 mt-5">
              <p className="font-bold text-lg mb-1">General</p>
              <ul>
                <li className="hover:text-orange cursor-pointer">Discover</li>
                <li className="hover:text-orange cursor-pointer">Morocco</li>
                <li className="hover:text-orange cursor-pointer">Sahara</li>
                <li className="hover:text-orange cursor-pointer">Ethiopia</li>
                <li className="hover:text-orange cursor-pointer">North Africa</li>
                <li className="hover:text-orange cursor-pointer">Victoria Fails</li>
              </ul>
            </div>

            {/* Company */}
            <div className="text-white">
              <p className="font-bold text-lg mb-1">Company</p>
              <ul>
                <li className="hover:text-orange cursor-pointer">About Us</li>
                <li className="hover:text-orange cursor-pointer">Safety</li>
                <li className="hover:text-orange cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Community */}
            <div className="text-white">
              <p className="font-bold text-lg mb-1">Community</p>
              <ul>
                <li className="hover:text-orange cursor-pointer">Staying Safe On & Offline </li>
                <li className="hover:text-orange cursor-pointer">Frequent Questions</li>
                <li className="hover:text-orange cursor-pointer">Travel Advice</li>
              </ul>
            </div> 

            {/* Legal */}
            <div className="text-white">
              <p className="font-bold text-lg mb-1">Legal</p>
              <ul>
                <li className="hover:text-orange cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-orange cursor-pointer">Booking Terms</li>
                <li className="hover:text-orange cursor-pointer">Privacy Policy</li>
                <li className="hover:text-orange cursor-pointer">FFI Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* bottom items */}

      <div className="flex items-center sm:justify-center mt-5">
        <div className="">
          <p className="text-white px-10">
            © 2022 Away Limited. All Rights Reserved.
          </p>
        </div>
      </div>
        {/* Social links */}
      <div className="flex items-center ml-10  sm:justify-end mr-14 sm:-mt-5 mt-2">
        <div className="flex w-4 h-4 gap-2 -px-20">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default index;
