import React from "react";
import './Header'
import {Link} from 'react-router-dom';
import  image from "./airbnb.jpeg"
import SearchIcon from '@mui/icons-material/Search';
import "./Home.css"
import "./Header.css"
// import { Expand } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Navbar from "./Navbar";
import FindMore from "./Filter";
import Card from './Card'
// import Filter from "./Filter";
// src/airbnb.jpeg
function Header({airbnbs,setAirbnbs}){
    return(
    <div className='header'>
    <Link to='/'>
        <img 
        className ="header_icon"
        src={image} alt="hello" />
        
</Link>
        {/* <div className="header_center">
<input type="text" placeholder="Type here "/> 
<SearchIcon/>
</div> */}
{/* <Filter airbnbs={airbnbs} setAirbnbs = {setAirbnbs}/> */}
{/* * <FindMore /> */}
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