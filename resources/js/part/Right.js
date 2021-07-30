import React from 'react';
import pexels from '../images/pexels-acali-2174190.jpg';
import { AngleRightIcon} from 'react-line-awesome';
import { HiChevronRight } from "react-icons/hi";
export default function Right() {
    function MinimalExample(props) {
        return <AngleRightIcon/>
      }
    return (
        <div className = "float-left shadow-xl bg-white w-30w h-screen py-8 px-8 fixed rounded-md hidden lg:block ..." >
            <div className = "flex space-x-4" >
                <div className = "relative ..." >
                    <img src = { pexels } className = "rounded-full mt-3 h-20 w-20 object-cover ..." />
                    <div className = "rounded-pill px-2 py-0.5 text-xs text-gray-100 bg-blue-800 mt-3 ml-16 text-center absolute top-0 ..." >
                         <span>Admin</span>
                    </div>
                </div >
                <div className="mt-10 ..." >
                    <p className = "text-base font-semibold m-0 ..." > Jenifer wilson </p>
                    <p className = "text-xs m-0 ..." > Web developer

                         </p>
                </div>
            </div >

            <div className="my-20 ...">
             <ul className="">
                 <li  className="my-2 rounded-lg flex justify-between items-center p-3 hover:text-gray-100 hover:bg-blue-800">
                      <div>DashBoard</div>
                     <div className ="flex items-center "><HiChevronRight className="stroke-current" /></div>
                 </li>
                 <li className="my-2 rounded-lg flex justify-between items-center p-3 hover:text-gray-100 hover:bg-blue-800">
                     <div>Banking</div>
                     <div className ="flex items-center"><HiChevronRight className="stroke-current" /></div>
                     </li>
                 <li className="my-2 rounded-md flex justify-between items-center p-3 hover:text-gray-100 hover:bg-blue-800">
                     <div>Investment</div>
                     <div className ="flex items-center"><HiChevronRight className="stroke-current" /></div>
                      </li>
                 <li className="my-2 rounded-md flex justify-between items-center p-3 hover:text-gray-100 hover:bg-blue-800">
                     <div>Assets</div>
                     <div className ="flex items-center"><HiChevronRight className="stroke-current" /></div>
                     </li>
             </ul>
            </div>


            <div className="my-24 ...">
                <ul>
                    <li className="my-1 px-3">My Account</li>
                    <li className="my-1 px-3">Global Setting</li>
                    <li className="my-1 px-3">Log out</li>
                </ul>
            </div>
       </div>



    )
}
