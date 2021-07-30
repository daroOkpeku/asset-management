import React from 'react'
import Top from './Top'
import LeftTop from './LeftTop'
export default function Content() {
    return (

            <div class="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                  <div className=" ...">
                    <Top/>
                  </div>
                </div>
                <div className="col-span-4 ">

                  <LeftTop/>
                </div>


            </div>
    )
}
