import React from "react";
import './Header'
import  image from "./airbnb.jpeg"
import "./Home.css"
// src/airbnb.jpeg
function Header(){
    return(
    <div className='header'>
        <img src={image} alt="hello" />
    </div>
    )
}



export default Header