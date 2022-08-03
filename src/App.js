

import React, {useState} from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [airbnbs, setAirbnbs] = useState([])
  return (

    // BEM
    <div className="app">
      <Router>
        <Header airbnbs={airbnbs} setAirbnbs = {setAirbnbs}/>
        
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home airbnbs={airbnbs} setAirbnbs = {setAirbnbs}/>
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;