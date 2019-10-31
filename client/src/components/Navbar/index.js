import React from "react"
import "./style.css"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <img href="/" src="./assets/images/frame.png" className="brand-logo nav-logo-img" />
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Login/Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar