import {ReactElement, useState} from "react";
import "../../styles/SearchBar.css";

function SearchBar({onSearch}) : ReactElement {
    const [query, setQuery] = useState("");

    function onChange(event: any) {
        setQuery(event.target.value);
    }

    function handleSearch(event: any) {
        event.preventDefault();
        onSearch(query);
    }

    return (
        <div>
            <div className="header">Search Games & Apps</div>
            <div className="row gx-2 pt-2">
                <div className="col-9">
                    <input value={query} onChange={onChange} className="form-control d-inline"
                           type="text" placeholder="Search..." aria-label="Search"/>
                </div>
                <div className="col-3">
                    <button className="btn btn-success d-inline" onClick={handleSearch}>Search
                    </button>
                </div>

            </div>
        </div>
    );
}

export default SearchBar;