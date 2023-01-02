import React from "react";
import { Right } from "../../../utils/assets";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";

const index = () => {
  return (
    <div className="pt-60 px-16">
      {/* wrapper */}
      <div className="flex flex-col py-14">
        <span className="text-9xl text-white font-bold">Experience</span>
        <span className="text-9xl text-white font-bold">Africa</span>
        <button className="rounded-xl bg-orange text-white p-3 w-80 h-20 text-3xl mt-5 flex justify-center items-center">
          BOOK A TRIP <img src={Right} alt="" className="pl-4" />
        </button>
      </div>
      <div className="flex items-center jusitify-center">
        <ArrowCircleDownOutlinedIcon />
      </div>
    </div>
  );
};

export default index;
