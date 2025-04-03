import {ReactElement, useState} from "react";
import GameCards from "./GameCards.tsx";

function LandingPage(): ReactElement {
    const [searchText, setSearchText] = useState("");
    const [submittedText, setSubmittedText] = useState("");

    function onChangeSearchText(event: any) {
        setSearchText(event.target.value);
    }

    function onSubmitSearchText() {
        setSubmittedText(searchText);
    }

    return (
        <div className="container">
            <div className="row row-gap-1 gy-3 p-4 mt-12">
                <div className="col-md-3 col-xs-12 col-sm-12">
                    <form className="form-inline">
                        <input value={searchText} onChange={onChangeSearchText} className="form-control w-75 d-inline" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success w-25 d-inline" onClick={onSubmitSearchText}>Search</button>
                    </form>
                </div>
                <div className="col-md-9 col-xs-12 col-sm-12">
                    <GameCards searchText={submittedText}></GameCards>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;