import React from "react";
import './Home.css'
import './Banner.css';
import Banner from './Banner.js';

function Home (){
    return( <div className='home'>
      <h1>Home component</h1>
      <Banner/>

        </div>
    )
}

export default Home