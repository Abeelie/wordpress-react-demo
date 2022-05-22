import React from "react";
import { useAbout1 } from "../../../hooks/useAbout1";
import "./about-section1.css";

const AboutSection1 = () => {
    const {error, data, loading} = useAbout1();

    if(loading) return <div>spinner....</div>

    if(error) return <div>Something went wrong</div>

    return (
        <div>
            <div className="columns about-section1">
                <div className="column">
                    <img 
                    id="wp-image-about1"
                        src={data.page.featuredImage.node.mediaItemUrl} 
                        alt="About"
                    />
                </div>
                <div className="column">
                    <div className="about-section1-text1">
                        <p dangerouslySetInnerHTML={{__html: data.page.content}}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection1