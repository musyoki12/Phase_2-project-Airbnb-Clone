import React from "react";
import './Header'
import  image from "./airbnb.jpeg"
import SearchIcon from '@mui/icons-material/Search';
import "./Home.css"
import "./Header.css"
// import { Expand } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// src/airbnb.jpeg
function Header(){
    return(
    <div className='header'>
        <img 
        className ="header_icon"
        src={image} alt="hello" />


        <div className="header_center">
<input type="text"/> 
<SearchIcon/>
</div>

<div className="header_right">
    <p> Become a host</p>
    <LanguageIcon/>
    <ExpandMoreIcon/>
    <Avatar/>
</div>
</div>

    )
}



export default Header 