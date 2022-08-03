import { Button } from '@mui/material';
import React ,{useState}from 'react'
import "./Banner.css"
import Search from './Search.js';
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { createRoot } from 'react-dom/client';


function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);


  function handleClick(path) {
    history.push(path);
  }
  return (
    <Router>
      <div className='banner'>
          <div className='banner__search'>
              {showSearch && <Search />}

              <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                  {showSearch ? "Hide" : "Search Dates"}
              </Button>
          </div>
          <div className='banner__info'>
              <h3>Get out and stretch your imagination</h3>
              <h5>
                  Plan a different kind of getaway to uncover the hidden gems near you.
              </h5>
              <Button onClick={() => handleClick('/search')} variant='outlined'>Explore Nearby</Button>
          </div>
      </div>
      </Router>
  )
}

export default Banner