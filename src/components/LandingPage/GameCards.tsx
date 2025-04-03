// GameCards.tsx
//
// Description:
// - Contains a list of game cards displayed in a grid. Sends an API request to the Apple App Store.
//
// Created by Gio Ciudadano

import {ReactElement, useEffect, useState} from "react";
import GameCard from "./GameCard.tsx";
import {GameCardsData} from "../../interfaces/GameCardsData.tsx";
import {GameCardData} from "../../interfaces/GameCardData.tsx";

interface GameCardsProps {
    searchText?: string
}

function GameCards({searchText}: GameCardsProps): ReactElement {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    function getQueryURL(searchText: string) {
        const QUERY_LIMIT = 30;

        if (searchText == "" || searchText === null) {
            searchText = "Games";
        }

        return `https://itunes.apple.com/search?term=${searchText}&entity=software&limit=${QUERY_LIMIT}`;
    }

    function fetchGames(searchText: string = ''): void {
        const QUERY_URL = getQueryURL(searchText);

        fetch(QUERY_URL).then((response: Response) => {
            if (!response.ok) {
                throw new Error('Unable to fetch games');
            }
            return response.json();
        }).then((data) => {
            setData(data);
            setIsLoading(false);
        }).catch((error) => {
            setError(error);
            setIsLoading(false);
        })
    }

    function sortGames() {
        gameCardsData.results.sort((a, b) => {
            const gameA = a as unknown as GameCardData;
            const gameB = b as unknown as GameCardData;

            return gameA.trackName.localeCompare(gameB.trackName);
        });
    }

    useEffect(() => {
        fetchGames(searchText);
    }, [searchText]);

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }

    const gameCardsData: GameCardsData = data!;
    if (error || !gameCardsData || !gameCardsData.results) {
        return (
            <div>There was an error.</div>
        )
    }
    sortGames();

    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5">
                {gameCardsData.results.map((game, index) =>
                    (
                        <GameCard key={index} game={game as unknown as GameCardData}/>
                    )
                )}
            </div>
        </div>
    );
}

export default GameCards;