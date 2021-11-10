import React from 'react'
import Particles from "react-particles-js";
import {useState, useEffect} from "react";
import "./mainheader.css";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoMdCall } from "react-icons/io";
import {AiOutlineMail} from 'react-icons/ai';
function MainHeader() 
{
    return (
        <div className = "lawyer-hero">
            <div className = "lawyer-hero-section-1">
                <h3 className = "lawyer-hero-section-1-heading">Aiming To Provide High-Quality Legal Consultancy</h3>
                <p className = "lawyer-hero-section-1-sub-heading">We approach each problem with three essential elements: strategic thinking, creative solutions, proven results.</p>
                <button className = "lawyer-hero-section-1-btn">Request Free Consultation</button>
            </div>
            <div className = "lawyer-hero-section-2">
                <img src = "https://demo2.joomshaper.com/2019/themis/images/2019/09/05/hero-img.png" alt = "image" className = "lawyer-hero-section-2-img"></img>
            </div>
            <div className = "lawyer-hero-section-3">
                <div className = "lawyer-hero-section-3-points">
                    <div className = "point">
                        <div className = "icon-container">
                            <AiOutlineClockCircle style = {{color: "#df9a2a", fontSize: "40px", marginRight: "5px"}}/>
                        </div>
                        <div className = "icon-text-container">
                            <p className = "icon-text-heading">Opening hours</p>
                            <p className = "icon-text-sub-heading">Mon - Fri (8:00- 20:00)</p>
                        </div>
                    </div>
                    <div className = "point">
                        <div className = "icon-container">
                            <IoMdCall style = {{color: "#df9a2a", fontSize: "40px", marginRight: "5px"}}/>
                        </div>
                        <div className = "icon-text-container">
                            <p className = "icon-text-heading">Opening hours</p>
                            <p className = "icon-text-sub-heading">Mon - Fri (8:00- 20:00)</p>
                        </div>
                    </div>
                    <div className = "point">
                        <div className = "icon-container">
                            <AiOutlineMail style = {{color: "#df9a2a", fontSize: "40px", marginRight: "5px"}}/>
                        </div>
                        <div className = "icon-text-container">
                            <p className = "icon-text-heading">Opening hours</p>
                            <p className = "icon-text-sub-heading">Mon - Fri (8:00- 20:00)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default MainHeader
