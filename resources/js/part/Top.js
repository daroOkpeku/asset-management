import React from 'react';
import image from '../images/3-2-atm-card-high-quality-png.png';
import image2 from '../images/7-2-atm-card-png-clipart.png';
import {HiChevronDown} from "react-icons/hi";
import { FaArrowRight} from 'react-icons/fa';
export default function Top() {
    return (
        <div className=" float-left  ...">
            {/* nav */}
            <div className="mt-2 rounded-md bg-white shadow-md p-3" >
                <section className="flex justify-between ">
                    <ul className=" flex text-center m-0 px-2 ">
                        <li className="mx-2 text-base">My Card</li>
                        <li className="mx-2 text-base">Wallet</li>
                        <li className="mx-2 text-base">Payment</li>
                    </ul>
                    <ul className=" flex justify-end text-center m-0 px-2">
                        <li className="mx-2 text-base">Manage Card</li>
                    </ul>
                </section>
                {/* end nav */}

                <section className="flex space-x-2 ...">
                        <div className="">
                        <img src={image2} className="object-cover" />
                        </div>
                        <div className="">
                        <  img src={image2} className="object-cover" />
                        </div>
                </section>
            </div>
            {/* Table */}
           <section className="mt-2 rounded-md bg-white shadow-md p-3" >
            <div className="flex justify-between text-center mt-1 ...">
                <h2 className="mx-2 text-base">Last Transaction</h2>
                <h2 className="mx-2 text-sm flex">Transaction Overview: Last 7 days<HiChevronDown className="mt-1"/></h2>
            </div>

            {/* <dialog></dialog> */}
            <table className='w-full ml-2'>
            <thead>
            <tr>
                <th className="text-gray-400">Date</th>
                <th className="text-gray-400">Description</th>
                <th className="text-gray-400 text-center" >Total</th>
            </tr>
            </thead>
            <tbody>
                 <tr className="bg-white border-b ...">
                    <td>3 July 2021</td>
                    <td className="py-2">
                        <p className='font-semibold mb-1'>Pension Payment</p>
                        <span className="text-xs text-gray-400" >Wilson fund 3:45PM</span>
                    </td>
                    <td className="text-center"> -&#8358;200,000  </td>
                </tr>
                <tr className="bg-white border-b ...">
                    <td>3 July 2021</td>
                    <td className="py-2">
                        <p className='font-semibold mb-1'>Pension Payment</p>
                        <span className="text-xs text-gray-400" >Wilson fund 3:45pm</span>
                    </td>
                    <td className="text-center" > -&#8358;200,000</td>
                </tr>
                <tr className="bg-white border-b ...">
                    <td>3 July 2021</td>
                    <td className="py-2">
                        <p className='font-semibold mb-1'>Pension Payment</p>
                        <span className="text-xs text-gray-400" >Wilson fund 3:45pm</span>
                    </td>
                    <td className="text-center" >-&#8358;200,000</td>
                </tr>
                <tr className="bg-white border-b ...">
                    <td>3 July 2021</td>
                    <td className="py-2">
                        <p className='font-semibold mb-1'>Pension Payment</p>
                        <span className="text-xs text-gray-400" >Wilson fund 3:45pm</span>
                    </td>
                    <td className="text-center" >-&#8358;200,000</td>
                </tr>
            </tbody>
            </table>
            <div className='flex justify-between py-2'>
                <div className='flex ' >
                    <a href='#' className="mr-2">Show full history</a>  | <a href='#'className="ml-2">Show full history</a>
                </div>
                <div>
                    <a href='#'>Consoildated view</a>
                </div>

            </div>
           </section>
        </div>

    )
}
