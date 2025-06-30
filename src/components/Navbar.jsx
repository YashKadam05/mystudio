import { React } from 'react'
import "./navbar.css"

import { Link } from "react-router";

// import SpLogo from "./SPLogo.png"
import lensLogo from "./lensLogo.png"

export default function Navbar() {

    const toggleMenu = () => {
        if (menuList.style.maxHeight == "300px") {
            menuList.style.maxHeight = "0px";
        }
        else {
            menuList.style.maxHeight = "300px";
        }
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={lensLogo} alt="logo" />
                </div>
                <ul id="menuList">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">About</a></li>
                    <li><Link to="/gallery" onClick={scrollToTop}>Gallery</Link></li>
                    <li><a href="#pricing">Services</a></li>
                    <li><a href="#booking">Bookings</a></li>
                    <li><button>Contact Now</button></li>
                </ul>
                <div className="menu-bar">
                    <span className="material-symbols-outlined" onClick={toggleMenu}>
                        menu
                    </span>
                </div>
            </div>
        </>
    )
}
