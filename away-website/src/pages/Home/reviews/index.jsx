import React from "react";
import { GroupedImages } from "../../../utils/assets";

const index = () => {
  return (
    <div className="bg-[black] font-[ubermove]  pt-[115px]">
      <h1 className="text-[white] font-[700] text-[64px] text-center leading-[78px]">
        Africa Tour Reviews
      </h1>
      <span className="text-[white] pt-[9px] justify-center font-[500] text-[32px] leading-[38.82px] flex">
        Average customer rating:
        <img src="src/assets/Group 8.png" className="pl-[10px] pr-[8px]" />
        4.5/2
      </span>
      <div className="flex pt-[111.9px] justify-evenly items-center  ">
        <div>
          <img src="src/assets/Group 8.png" />
          <h1 className="text-[32px] font-[700]  pt-[15.41px] leading-[39px] text-[white]">
            A Morocco Adventure
          </h1>
          <p className="font-[500] text-[white]  pt-[15.41px] leading-[29px] w-[389px] text-[24px]">
            The entire vacation was fantastic, but the High Atlas landscape and
            the trek were the highlights...
            <span className=" text-[#FFAC4A] underline decoration-[#FFAC4A] decoration-solid ">
              view more
            </span>
          </p>
          <div className="pt-[13px]">
            <span className="text-[#C4C4C4] pt-[13px] text-[24px] leading-[29px] font-[500]">
              John - 2 days ago
            </span>
          </div>
        </div>
        <div>
          <img src="src/assets/Group 8.png" />
          <h1 className="text-[32px] font-[700] pt-[15.41px]  leading-[39px] text-[white]">
            Explore Nigeria
          </h1>
          <p className="font-[500] text-[white] pt-[15.41px] leading-[29px] w-[389px] text-[24px]">
            Wonderful trip, fantastic guide (Mohamed). The trip was an
            adventure, mule riding...
            <span className=" text-[#FFAC4A] underline decoration-[#FFAC4A] decoration-solid ">
              view more
            </span>
          </p>
          <div className="pt-[13px]">
            <span className="text-[#C4C4C4]  text-[24px] leading-[29px] font-[500]">
              Sandra - 2 days ago
            </span>
          </div>
        </div>
        <div>
          <img src="src/assets/Group 8.png" />
          <h1 className="text-[32px] font-[700] leading-[39px] pt-[15.41px] text-[white]">
            Victoria Falls
          </h1>
          <p className="font-[500] text-[white] pt-[15.41px] leading-[29px] w-[389px] text-[24px]">
            The Falls were amazing. We even did the helicopter ride aswell. We
            also had afternoon tea at th...
            <span className=" text-[#FFAC4A] underline decoration-[#FFAC4A] decoration-solid ">
              view more
            </span>
          </p>
          <div className="pt-[13px]">
            <span className="text-[#C4C4C4] text-[24px]   leading-[29px] font-[500]">
              Tom - 3 days ago
            </span>
          </div>
        </div>
      </div>
      <div className="py-36 flex items-center justify-center">
        <div className=" text-white absolute z-10 sm:text-7xl mb-36 pl-28 font-medium">
          <p>
            More than just a <span>Trip</span>
          </p>
          <p>
            It's an Adventure where you
            <br /> take control
          </p>
        </div>
        <div className="flex items-center justify-center relative">
          <img src={GroupedImages} alt="" className=""/>
        </div>
      </div>
    </div>
  );
};

export default index;
