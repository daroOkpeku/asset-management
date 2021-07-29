import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/app.css"
import Navbar from '../part/Navbar';
import Body from '../part/body'

function Example() {
    return (

        <
        div className = "App" >
        <
        Body / >
        <
        /div>


    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render( < Example / > , document.getElementById('example'));
}
