import {ReactElement} from "react";
import "../../styles/NavigationBar.css";

function NavigationBar() : ReactElement {
    return (
        <nav className="navigation-bar navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
            <a className="navbar-brand h1" href="#">Gameify</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;