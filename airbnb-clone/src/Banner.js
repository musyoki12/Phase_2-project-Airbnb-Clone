import { Button } from '@mui/material';
import React ,{useState}from 'react'
import "./Banner.css"
import Search from './Search.js';
// import { Button } from "@material-ui/core";



function Banner() {
    const [showSearch, setShowSearch] = useState(false);



  return (
    <div className='banner'>
        <div className='banner__search'>{showSearch && <Search/>}
            <Button onClick={()=>setShowSearch(!showSearch)} className='banner__searchButton'
             variant='outlined'>Search Dates</Button>
        </div>
    <div className='banner_info'>
        <h1>Get out and strech your imagination</h1>
        <h5>
            PLan a difference a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>


    </div>
    </div>
  )
}

export default Banner;
