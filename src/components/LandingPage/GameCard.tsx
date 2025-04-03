// GameCard
//
// Description:
// -

import {ReactElement} from "react";
import '../../styles/GameCard.css';
import {GameCardData} from "../../interfaces/GameCardData.tsx";

interface GameCardProps {
    game: GameCardData;
}

function GameCard({game} : GameCardProps): ReactElement {
    function getScreenshots() : string {
        if (game.ipadScreenshotUrls[0]) {
            return game.ipadScreenshotUrls[0];
        }
        if (game.screenshotUrls[0]) {
            return game.screenshotUrls[0];
        }
        return `https://placehold.co/600x400/000000/FFFFFF/png?text=${game.trackName}`;
    }

    return (
        <div className="col">
            <div className="card">
                <img className="card-banner" src={getScreenshots()} alt="Banner"></img>
                <div className="card-body">
                    <h5 className="card-title">{game.trackName}</h5>
                    <div className="card-img-overlay d-flex align-items-start justify-content-center">
                        <img className="card-icon" src={game.artworkUrl100} alt="Icon"></img>
                    </div>
                    <p className="card-description">{game.description}</p>
                </div>
            </div>
        </div>
    );
}

export default GameCard;