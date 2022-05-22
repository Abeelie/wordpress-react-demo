import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer has-text-white">
             <div className="container">
                <div className="content has-text-centered">
                    <p className="footer-text">
                        Copyright &copy; 2022, All Right Reserved
                    </p>
                    <div className="footer-icons">
                        <a className="facebook-icon" href="https://www.facebook.com/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="twitter-icon" href="https://twitter.com/?lang=en">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="instagram-icon" href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer