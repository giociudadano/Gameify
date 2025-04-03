import {ReactElement, useState} from "react";

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
        <form className="form-inline">
            <input value={query} onChange={onChange} className="form-control w-75 d-inline"
                   type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success w-25 d-inline" onClick={handleSearch}>Search
            </button>
        </form>
    );
}

export default SearchBar;