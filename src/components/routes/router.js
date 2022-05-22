import { Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import HomePage from "../../pages/home/home";
import MoonsPage from '../moons/moons';
import PlanetPage from '../planets/planets';
import NotFoundPage from '../404/notfoundpage';  
import Footer from '../footer/footer';


const Router = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/moons" element={<MoonsPage/>} />
                <Route exact path="/planets" element={<PlanetPage/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>
    )
}



export default Router