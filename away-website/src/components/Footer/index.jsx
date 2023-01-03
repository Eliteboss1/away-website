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
            <div className="text-white mt-5">
              <p className="font-bold text-lg mb-1">General</p>
              <ul>
                <li>Discover</li>
                <li>Morocco</li>
                <li>Sahara</li>
                <li>Ethiopia</li>
                <li>North Africa</li>
                <li>Victoria Fails</li>
              </ul>
            </div>

            {/* Company */}
            <div className="text-white">
              <p className="font-bold text-lg mb-1">Company</p>
              <ul>
                <li>About Us</li>
                <li>Safety</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Community */}
            <div className="text-white">
              <p className="text-bold text-lg mb-1">Community</p>
              <ul>
                <li>Staying Safe On & Offline </li>
                <li>Frequent Questions</li>
                <li>Travel Advice</li>
              </ul>
            </div>

            {/* Legal */}
            <div className="text-white">
              <p className="text-bold text-lg mb-1">Legal</p>
              <ul>
                <li>Terms & Conditions</li>
                <li>Booking Terms</li>
                <li>Privacy Policy</li>
                <li>FFI Policy</li>
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
