import React from 'react'
import Particles from "react-particles-js";
import {useState, useEffect} from "react";
import "./mainheader.css";
function MainHeader() 
{
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [])

    //Function for handling resizing of screen
    function handleResize()
    {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (
    <div>
        <div className = "place-over-img">
            <div className = "centered-container">
                <h1 className = "heading-text"> We <br></br> Fight For You </h1>
            </div>
        </div> 

        <div className = "main-header-background">
            <Particles
            width = {width}
            height = {height}
            params={{
            particles: {
                number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 1100
                }
                },
                color: {
                value: "#ffffff"
                },
                shape: {
                type: "triangle",
                stroke: {
                    width: 0.7,
                    color: "#ffffff"
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
                },
                opacity: {
                value: 2,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
                },
                size: {
                value: 7,
                random: true,
                anim: {
                    enable: false,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
                },
                line_linked: {
                enable_auto: false,
                distance: 0,
                color: "#fff",
                opacity: 1,
                width: 1,
                condensed_mode: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
                },
                move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: true
                },
                resize: true
                }
            },
            retina_detect: true
            }}
      />
    </div>  
    </div>
    )
}

export default MainHeader
