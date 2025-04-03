import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./components/LandingPage/LandingPage.tsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.tsx";
import {Fragment} from "react";
import "./App.css";

function App() {
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <LandingPage></LandingPage>
        </Fragment>
    )
}

export default App
