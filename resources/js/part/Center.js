import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
export default function Center() {
    return (
        <div className="w-50w float-right px-2 ...">
          <Navbar/>
          <Content/>
        </div>
    )
}
