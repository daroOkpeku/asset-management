import React from 'react'
import { FaBell } from "react-icons/fa";
export default function Navbar() {

    return (

        <div className="w-full h-16 rounded-md bg-white shadow-md p-2 ...">
              <div className = "flex space-x-3" >
                <div className = "relative ..." >
                    <div className="bg-gray-200 mt-2 mr-2 px-2 rounded-md h-8 flex items-center" >
                        <FaBell className="h-4 w-4 object-cover text-blue-800 ..."/>
                    </div>
                    <div className = "rounded-full h-4 w-4 flex justify-content-center items-center text-xs bg-green-500 absolute top-0 right-0 ..." >3</div>
                </div >
                <div className="mt-1 ..." >
                    <p className = "text-base font-semibold m-0 ..." > Total Asset Balance </p>
                    <p className = "text-xs m-0 ..." > <span>&#8358;20, 000, 000</span></p>
                </div>
            </div >

        </div>


    )
}
