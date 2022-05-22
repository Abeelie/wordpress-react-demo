import "./notfound.css";
import NotFoundImage from "./404.jpg";

const NotFoundPage = () => {
    return (
        <div className="notfound-section" align="center">
            <a className="go-back-home" href="/">Go Back Home</a>
            <img src={NotFoundImage}
                 alt="404"
                 height="100%"
                 width="100%"
            />
        </div>
    )
}


export default NotFoundPage;