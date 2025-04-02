// GameCards.tsx
//
// Description:
// - Contains a list of game cards displayed in a grid. Sends an API request to the Apple App Store.
//
// Created by: Gio Ciudadano

import {ReactElement, useEffect, useState} from "react";
import GameCard from "./GameCard.tsx";
import {GameCardsData} from "../interfaces/GameCardsData.tsx";
import {GameCardData} from "../interfaces/GameCardData.tsx";

function GameCards() : ReactElement {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Sends a GET Request to the Apple App Store.
    function FetchGames(): void {
        const QUERY_URL : string = 'https://itunes.apple.com/search?term=Games&entity=software&limit=20';

        useEffect(() => {
            fetch(QUERY_URL)
                .then((response: Response) => {
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
        }, [])
    }
    FetchGames();

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }

    if (error || data === null) {
        return (
            <div>There was an error.</div>
        )
    }

    const gameCardsData : GameCardsData = data;
    gameCardsData.results.sort();
    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-3">
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