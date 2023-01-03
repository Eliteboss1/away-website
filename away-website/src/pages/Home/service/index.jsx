import React from "react";
import "../service/index.css";
const index = () => {
  return (
    <div className="bg-[black]  pt-[50px] font-[ubermove]">
      <h1 className=" text-[30px] md:text-[45px] lg:text-[64px]  text-center font-[700] leading-[169.8%] text-white">
        A Credible Adventure Travel Agency
      </h1>
      <p className="font-[500] leading-[121.3%] text-center text-[24px] text-white">
        There's a reason why 98 percent of clients saythey'd book with us again
      </p>
      <div className=" md:flex text-center pt-[120px] justify-evenly  items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src="src/assets/Group 2 (1).png"
            className="  h-[111px] pl-[5rem]"
          />
          <h1 className="text-[#FFAC4A] font-[700] text-[27px] md:text-[32px] pt-[76px] leading-[121.3%]">
            Amazing experences
          </h1>
          <p className="  text-[24px] leading-[168.8%] text-[white]  font-[500] block ">
            Our trips, from enormous wows to hidden jewels, will leave you
            feeling like you've actually explored.
          </p>
        </div>

        <div className="flex flex-col  items-center">
          <img
            src="src/assets/Vector (3).svg"
            className=" h-[111px]   pl-[5rem]"
          />
          <h1 className="text-[#FFAC4A] font-[700] pt-[76px] text-[32px] leading-[121.3%]">
            Shared experences
          </h1>
          <p className="text-[24px] leading-[168.8%] text-[white] font-[500] block ">
            Find the folks you'll be climbing mountains with. Find companions to
            venture across the forests with.
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img
            src="src/assets/Vector (4).svg"
            className="  h-[111px] pl-[5rem]"
          />
          <h1 className="text-[#FFAC4A] font-[700] pt-[76px] text-[32px] leading-[121.3%]">
            We do the right thing.
          </h1>
          <p className="text-[24px] leading-[168.8%] text-[white] font-[500] block ">
            Our flexible booking policy, loyalty program, and environmentally
            friendly attitude set us apart
          </p>
        </div>
      </div>
      <div className="md:flex pt-[199px] pr-[33.4px]">
        <div>
          <h1 className="text-[30px] md:text-[45px] lg:text-[64px] flex items-center justify-center font-[700] leading-[169.8%] text-white">
            Did you know?
          </h1>
          <p className="font-[500] pl-[66px] pr-[28px] leading-[168.8%]   text-[24px] text-white">
            Africa is famous for its animals. Africa has some of the world's
            best wildlife reserves, including the Serengeti, Etosha, Ngorongoro,
            Chobe, and Kruger national parks, and is home to the Big Five (lion,
            leopard, elephant, buffalo, and rhinoceros). 
            <button className=" cursor-pointer mt-[17px] transition duration-500   hover:ease-in-out hover:scale-75 hover:bg-[#61390c] flex justify-center items-center  h-[80px] w-[280px] md:w-[376px] border-[2px] rounded-[10px]  text-[#FFFFFF]">
              <span className="font-[500]  text-[24px] leading-[24px]">
                Read More
              </span>
              <img
                src="src/assets/Vector (2).svg  "
                className="pl-[10px] pt-[5px] object-cover  "
              />
            </button>
          </p>
        </div>
        <img src="src/assets/Rectangle 12.png" className="pt-[30px] md:p-0" />
      </div>
      <div className="pt-[115px]">
        <h1 className="text-[30px] md:text-[45px] lg:text-[64px]  pl-[70px] font-[700] leading-[169.8%] text-white">
          Our Gallery
        </h1>
        <div className="px-[72px] ">
          <div>
            <div className="mako">
              <div>
                <img src="src/assets/Rectangle 17 (1).png" />
              </div>
              <div>
                <img src="src/assets/Rectangle 20.png" />
              </div>
              <div>
                <img src="src/assets/Rectangle 19.png" />
              </div>

              <div>
                <img src="src/assets/Rectangle 22.png" />
              </div>
              <div>
                <img src="src/assets/Rectangle 21.png" />
              </div>
            </div>
          </div>
          <span className="text-[#FFAC4A] pt-[42px] text-[24px] font-[500] flex cursor-pointer leading-[126.8%]">
            View More
            <img
              src="src/assets/bi_arrow-down-right.png"
              className="pl-[5px] pt-[7px]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
