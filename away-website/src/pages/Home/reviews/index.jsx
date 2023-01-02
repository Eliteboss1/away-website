import React from "react";

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
            <span className=" text-[#FFAC4A]  cursor-pointer  hover:text-[#6b6a6a] hover:decoration-[#6b6a6a] underline decoration-[#FFAC4A] decoration-solid ">
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
            <span className=" text-[#FFAC4A] cursor-pointer hover:text-[#6b6a6a] hover:decoration-[#6b6a6a] underline decoration-[#FFAC4A] decoration-solid ">
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
            <span className=" text-[#FFAC4A] cursor-pointer hover:text-[#6b6a6a] hover:decoration-[#6b6a6a]  underline decoration-[#FFAC4A] decoration-solid ">
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
      <div className="pt-[138px] bg-[black]  ">
        <div className="overflow-hidden z-[100] w-[300px] lg:w-[100%] lg:flex  lg:flex-col lg:justify-center lg:items-center">
          <div className=" relative">
            <img src="src/assets/Rectangle 24.png" className="object-cover" />
          </div>
          <div className="relative z-[100] bottom-[2rem] right-[7rem] ">
            <img src="src/assets/Rectangle 27.png" className="object-cover" />
          </div>
          <div className="relative bottom-[28rem] left-[20rem] ">
            <img
              src="src/assets/Rectangle 25 (1).png"
              className="object-cover"
            />
          </div>
          <div className="relative z-[200] bottom-[31rem] left-[20rem] ">
            <img
              src="src/assets/Rectangle 26 (1).png"
              className="object-cover"
            />
          </div>
          <div className="relative  bottom-[41rem] right-[5rem] ">
            <img src="src/assets/Rectangle 30.png" className="object-cover" />
          </div>
          <div className="relative bottom-[70rem] text-center  z-[300]">
            <h1 className="text-[white]  text-[64px] font-[700] leading-[78px]">
              More than just a<span className="text-[#FFAC4A]">Trip.</span>
            </h1>
            <p className="text-[white] w-[50rem] text-[64px]  font-[700] leading-[78px]">
              Its an Adventure where you take Control
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
