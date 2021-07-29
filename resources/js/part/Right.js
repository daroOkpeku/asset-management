import React from 'react';
import pexels from '../images/pexels-acali-2174190.jpg';
import { AngleRightIcon} from 'react-line-awesome';
export default function Right() {
    function MinimalExample(props) {
        return <AngleRightIcon/>
      }
    return (


        <div className = "float-left shadow-xl bg-white  border-fuchsia-600 border-r-2 w-30w h-screen py-8 px-8  ..." >
            <div className = "flex space-x-4" >
                <div className = "relative ..." >
                    <img src = { pexels } className = "rounded-full mt-3 h-20 w-20 object-cover ..." />
                    <div className = "rounded-pill px-2 py-0.5 text-xs bg-green-500 ml-16 text-center absolute top-4 ..." > Ultimate</div>
                </div >
                <div className="mt-10 ..." >
                    <p className = "text-base font-semibold m-0 ..." > Jenifer wilson </p>
                    <p className = "text-xs m-0 ..." > Web developer

                         </p>
                </div>
            </div >

            <div className="my-20 ...">
             <ul className="">
                 <li  className="h-10 w-full my-2 rounded-md  border-2 flex justify-between items-center p-4 hover:text-gray-100 hover:bg-blue-500">
                      <div>DashBoard</div>
                     <div className ="flex items-center "><AngleRightIcon className="text-blue-800 hover:text-gray-100" /></div>
                 </li>
                 <li className="h-10 w-full my-2 rounded-md  border-2 flex justify-between items-center p-4 hover:text-gray-100 hover:bg-blue-500">
                     <div>Banking</div>
                     <div className ="flex items-center"><AngleRightIcon className="text-blue-800" /></div>
                     </li>
                 <li className="h-10 w-full my-2 rounded-md  border-2 flex justify-between items-center p-4 hover:text-gray-100 hover:bg-blue-500">
                     <div>investment</div>
                     <div className ="flex items-center"><AngleRightIcon className="text-blue-800" /></div>
                      </li>
                 <li className="h-10 w-full my-2 rounded-md  border-2 flex justify-between items-center p-4 hover:text-gray-100 hover:bg-blue-500">
                     <div>super</div>
                     <div className ="flex items-center"><AngleRightIcon className="text-blue-800" /></div>
                     </li>
             </ul>
            </div>


            <div className="my-24 ...">
                <ul>
                    <li className="my-1">My Account</li>
                    <li className="my-1">Global Setting</li>
                    <li className="my-1">Log out</li>
                </ul>
            </div>
       </div>



    )
}
