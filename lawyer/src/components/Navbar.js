import React from 'react'
import "./navbar.css";
import {useState, useEffect} from "react";
function Navbar() 
{
    const [width, setWidth] = useState(window.innerWidth);
    const [isMenuIconClicked, setMenuIconClicked] = useState(false);
    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);
    }, [])

    function handleResize()
    {
        setWidth(window.innerWidth);
    }
    return (
        <nav className = "navbar">
            <div className = "navbar-icon">
                <img src = "https://demo2.joomshaper.com/2019/themis/templates/themis/images/presets/preset1/logo.svg" className = "law-icon"></img>
                {/* <h1 className = "navbar-text">IAMLAWYER</h1> */}
            </div>
            {
                width > 768 ? 
                <ul className = "menu-items">
                    <li className = "items-active">Home</li>
                    <li className = "items">Case Studies</li>
                    <li className = "items">Blog</li>
                    <li className = "items">Pages</li>
                    <li className = "items">Addons</li>
                    <li className = "items">Appointment</li>  
                </ul> 
                : 
                <div>
                    <img src = "/menu.svg" className = "menu-icon" onClick = {() => setMenuIconClicked(!isMenuIconClicked)}></img>
                    {isMenuIconClicked ? 
                    <div className = "menu-items-mobiles">
                        <ul className = "menu-items">
                            <li className = "items">Home</li>
                            <li className = "items">About</li>
                            <li className = "items">Contact Us</li>
                        </ul> 
                    </div> 
                    : 
                    <></>
                    }
                </div>
                
            }
            
        </nav>
    )
}

export default Navbar

