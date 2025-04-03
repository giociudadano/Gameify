// LandingPage.tsx
//
// Description:
// - Displays the landing page of the site.
//
// Created by Gio Ciudadano

import {ReactElement, useState} from "react";
import GameCards from "./GameCards.tsx";
import SearchBar from "./SearchBar.tsx";
import SortList from "./SortList.tsx";

function LandingPage(): ReactElement {
    const [searchText, setSearchText] = useState("");
    const [sort, setSort] = useState("");

    // Submits the value of searchText to the GameCards component which updates the query.
    function onSearch(query: string): void {
        //console.log(query);
        setSearchText(query);
    }

    function onSort(sort: string): void {
        setSort(sort);
    }

    return (
        <div className="container" data-bs-theme="dark">
            <div className="row row-gap-1 gy-3 p-0 mt-12">
                <div className="col-md-3 col-xs-12 col-sm-12 ">
                    <SearchBar onSearch={onSearch}></SearchBar>
                    <SortList onSort={onSort}></SortList>
                </div>
                <div className="col-md-9 col-xs-12 col-sm-12">
                    <GameCards sort={sort} searchText={searchText}></GameCards>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;