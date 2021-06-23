import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-light">
            <div className="nav-container">
                <Link className="navbar-title" to="/">Google Books</Link>
                <ul className="navbar-links">
                    <li className="nav-search">
                    <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    <li className="nav-saved">
                    <Link className="nav-link" to="/saved">Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;