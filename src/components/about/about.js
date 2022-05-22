import React from "react";
import "./about.css";
import AboutSection1 from "./about-sections/about-section1";
import AboutSection2 from "./about-sections/about-section2";


const About = () => {
    return (
        <React.Fragment>
            <div className="about-title">About</div>
            <AboutSection1 />
            <AboutSection2 />
        </React.Fragment>
    )
}

export default About