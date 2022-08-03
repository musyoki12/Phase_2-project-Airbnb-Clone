import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar bg-light">
    <div className="container-fluid">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/search">SEARCH</Link>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar