import React from 'react'
import {
    Link
  } from "react-router-dom";
  
export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMania</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/about">About</Link> */}
                        {/* </li> */}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
