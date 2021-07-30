import React from 'react'
import { FaBell, FaMoneyBillWave } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowDownRight } from "react-icons/bs";
export default function Navbar() {

    return (

        <div className="w-full rounded-md bg-white shadow-sm px-3 py-2 flex justify-between items-center ...">
              <div className = "flex space-x-3" >
                <div className = "relative ..." >
                    <div className="bg-gray-200 mt-2 mr-2 px-2 rounded-md h-8 flex items-center" >
                        <FaBell className="h-4 w-4 object-cover text-blue-800 ..."/>
                    </div>
                    <div className = "rounded-full h-4 w-4 flex justify-content-center items-center text-xs bg-green-500 absolute top-0 right-0 ..." >3</div>
                </div >
                <div className="..." >
                    <p className = "text-base font-semibold m-0 ..." > Total Asset Balance </p>
                    <p className = "text-xs m-0 ..." > <span>&#8358;20, 000, 000</span></p>
                </div>
            </div >
           <div className="w-3/5  flex justify-between  p-3  ...">

           <div className = "flex space-x-3 " >
                <div className = "flex items-center ..." >
                    <div className="bg-gray-200 p-2 rounded-md " >
                        <BsArrowUpRight className="h-4 w-4 object-cover text-blue-800 ..."/>
                    </div>
                </div >
                <div className="..." >
                    <p className = "text-base font-semibold m-0 ..." > &#8358;4,000,000 </p>
                    <p className = "text-xs m-0 ..." > <span>Income</span></p>
                </div>
            </div >

            <div className = "flex space-x-3 " >
                <div className="flex items-center ...">
                    <div className="bg-gray-200 px-2 py-2 rounded-md " >
                        <BsArrowDownRight className="h-4 w-4 object-cover text-blue-800 ..."/>
                    </div>
                </div>

                <div className="..." >
                    <p className = "text-base font-semibold m-0 ..." > &#8358;4,000,000 </p>
                    <p className = "text-xs m-0 ..." > <span>Expanses</span></p>
                </div>
            </div >


            <div className = "flex space-x-3 " >
                <div className = "flex items-center ..." >
                    <div className="bg-gray-200 p-2 rounded-md" >
                        <FaMoneyBillWave className="h-4 w-4 object-cover text-blue-800 ..."/>
                    </div>
                </div >
                <div className="..." >
                    <p className = "text-base font-semibold m-0 ..." > &#8358;3,500,000</p>
                    <p className = "text-xs m-0 ..." > <span>saving</span></p>
                </div>
            </div >



           </div>
        </div>


    )
}
