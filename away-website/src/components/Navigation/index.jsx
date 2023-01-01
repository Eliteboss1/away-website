import React from 'react'
import { AppLogo } from '../../utils/assets'

const index = () => {
  return (
    <div className="bg-hero">
        <div className="grid grid-cols-2 pt-10 px-10">
            {/* left */}
            <div className="">
                <img src={AppLogo} alt="" />
            </div>

            {/* right */}
            <div className="flex justify-between items-center">
                <ul className="flex gap-20 text-2xl text-white">
                    <li>Discover</li>
                    <li>Gallery</li>
                    <li>Reviews</li>
                </ul>
                <button className="text-white bg-orange rounded-xl p-3 w-36 h-12">LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default index