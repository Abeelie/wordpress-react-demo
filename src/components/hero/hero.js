import { useHome } from "../../hooks/useHome";
import "./hero.css";

const Hero = () => {
    const {error, data, loading} = useHome();

    if(loading) return <div>spinner....</div>

    if(error) return <div>Something went wrong</div>

    return(
        <div className="hero-section">
            <img 
                id="myImage" 
                src={data.page.featuredImage.node.mediaItemUrl} 
                alt="hero"
            />
            <div className="hero-text">
                <div className="hero-title">
                    <p dangerouslySetInnerHTML={{__html: data.page.content}}>

                    </p>
                </div>
            </div>
        </div>

    )
}

export default Hero