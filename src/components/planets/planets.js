import "./planets.css";
import { usePlanets } from "../../hooks/usePlanets";

const Planets = () => {
    const {error, data, loading} = usePlanets();

    if(loading) return <div>spinner....</div>

    if(error) return <div>Something went wrong</div>

    return (
        <div>
            <h2 className="planets-title">Planets</h2>
        <div className="planets-section">
            <div className="images-planets-section" 
                 dangerouslySetInnerHTML={{__html: data.page.content}}>
            </div>
        </div>
        </div>
    )
}


export default Planets