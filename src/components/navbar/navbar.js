import React, {useState} from "react";
import { useNavbar } from "../../hooks/useNavBar";

const Navbar = () => {
    const [isActive, setisActive] = useState(false);
    const {error, data, loading} = useNavbar();

    if(loading) return <div>spinner....</div>

    if(error) return <div>Something went wrong</div>

    const navBarItems = data.pages.edges.slice(2, 4);

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">Wordpress-GraphQL-React Example</a>
                <a
                    onClick={() => {
                    setisActive(!isActive);
                    }}
                    role="button"
                    className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div
                id="navbarBasicExample"
                className={`navbar-menu ${isActive ? "is-active" : ""}`}
                >

                <div className="navbar-end">
                    {navBarItems.map(navBarItem => (
                        <a key={navBarItem.node.id} href={`/${navBarItem.node.title}`} className="navbar-item">{navBarItem.node.title}</a>
                    ))} 
                </div>
            </div>
        </nav>
    )
}

export default Navbar