import React from 'react'
import { Arrow } from "../../../utils/assets";

const index = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
        <div className="-mt-10">
       <img src={Arrow} alt=""/>
       </div>
        <div className="py-36 sm:px-0 px-10">
        <span className="text-white font-medium text-2xl sm:text-3xl">“From the time you arrive on your Africa adventure<br/> vacation, you are surrounded by the overwhelming sights,<br/> sounds, scents, and colors of Africa"</span>
       </div>
       
    </div>
  )
}

export default index