import {ReactElement} from "react";
import '../../styles/GameCard.css';
import {GameCardData} from "../../interfaces/GameCardData.tsx";

interface GameCardProps {
    game: GameCardData;
}

function GameCard({game} : GameCardProps): ReactElement {
    return (
        <div className="col">
            <div className="card">
                <img className="card-banner" src={game.screenshotUrls[0]} alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{game.trackName}</h5>
                    <p className="card-description">{game.description}</p>
                </div>
            </div>
        </div>
    );
}

export default GameCard;