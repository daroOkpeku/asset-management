import React from 'react';
 import {FaCircle, FaClock, FaArrowRight} from 'react-icons/fa';
export default function LeftTop() {
    return (
        <div className=" shadow-md rounded-md bg-white mt-2 py-2 px-2 h-full ......">

            <div className="flex items-center justify-between px-2" >
                <p className=" m-0 text-base" >Transfer</p>
                <div className="flex space-x-2">
                    <span className="">Planned</span>
                    <div className="flex items-center" >
                     <  div  className="bg-blue-800 grid place-items-center text-gray-100 text-xs  rounded-full h-5 w-5">4</div>
                    </div>
                </div>
            </div>
          <ul className="bg-white mt-2  ...">
              <li id="ayo" className="bg-gray-100 m-2 border hover:bg-blue-800 hover:text-gray-100 transition duration-500 ease-in-out flex justify-between rounded p-3 ">
                  <div className='flex space-x-2'>
                      <div className='flex items-center '><FaClock className="fill-current text-white-100"/></div>
                        <span>Domestic Tranfer</span>
                  </div>
                  <div className='flex items-center'><FaArrowRight className="stroke-current text-white-100"/></div>
                </li>
              <li id="ayo" className=" border border-indigo-300 m-2 hover:bg-blue-800 hover:text-gray-100 flex transition duration-500 ease-in-out items-center justify-between rounded p-3 "><FaClock className=" fill-current text-white-800"/>internal Bank Tranfer<FaArrowRight className="stroke-current text-white-100"/></li>
              <li id="ayo" className=" border border-indigo-300 m-2 hover:bg-blue-800 hover:text-gray-100  transition duration-500 ease-in-out flex  items-center justify-between rounded p-3 "><FaClock className="fill-current text-white-800"/>Foreign transfer<FaArrowRight className="stroke-current text-white-100"/></li>
          </ul>
        </div>
    )
}
