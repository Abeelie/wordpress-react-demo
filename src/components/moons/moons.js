import "./moons.css";
import { useMoon } from "../../hooks/useMoons";

const Moons = () => {
    const {error, data, loading} = useMoon();

    if(loading) return <div>spinner....</div>

    if(error) return <div>Something went wrong</div>

    return (
        <div>
            <h2 className="moons-title">Moons</h2>
        <div className="moons-section">
            <div className="images-moons-section" 
                 dangerouslySetInnerHTML={{__html: data.page.content}}>
            </div>
        </div>
        </div>
    )
}


export default Moons