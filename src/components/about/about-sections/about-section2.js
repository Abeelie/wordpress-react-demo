import React from "react";
import { useAbout2 } from "../../../hooks/useAbout2";
import "./about-section2.css";

const AboutSection2 = () => {
    const {error, data, loading} = useAbout2();

    if(loading) return <div>spinner....</div>

    if(error) return <div>Something went wrong</div>

    return (
        <div>
            <div className="columns about-section2">
                <div className="column">
                    <div className="about-section1-text1">
                        <p dangerouslySetInnerHTML={{__html: data.page.content}}></p>
                    </div>
                </div>
                <div className="column">
                    <img 
                        id="wp-image-about2"
                        src={data.page.featuredImage.node.mediaItemUrl} 
                        alt="About"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection2