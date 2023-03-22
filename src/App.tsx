import React, {useState} from 'react';
import {
    boardButton,
    boardButtonContainer,
    boardContainer,
    boardFeatureList,
    boardHeader,
    boardPlanLimits,
    boardProgressBar,
    container
} from "./app.css";
import BrandImage from './assets/images/badge.png'


export const App: React.FC = () => {
    const [board, setBoard] = useState(0);
    const incrementBoard = (): void => {
        setBoard(board + 1)
    }
    return (
        <div className={container}>
            <div className={boardContainer}>
                <div>
                    <img src={BrandImage} alt="badge image"/>
                </div>

                <div className={boardHeader}>
                    <h2>Upgrade to Riddey PRO and boost productivity!</h2>
                    <p>Pellentesque porttitor euismod ante, accumsan consequat purus!</p>
                </div>

                <ul className={boardFeatureList}>
                    <li><span>Feature #1 </span> - Etiam convallis, nibh vitae dui risus</li>
                    <li><span>Feature #2 </span> - Etiam convallis, nibh vitae dui risus</li>
                    <li><span>Feature #3 </span> - Etiam convallis, nibh vitae dui risus</li>
                </ul>

                <div className={boardPlanLimits}>
                    <h4>Current usage</h4>
                    <div>
                        <small> {board} out of 10 boards in use</small>
                        <div>
                            <progress className={boardProgressBar} value={board * 10} max="100"></progress>
                        </div>
                    </div>
                </div>

                <div className={boardButtonContainer}>
                    <button className={boardButton} onClick={() => incrementBoard()} disabled={board >= 10}>Add New
                        Board
                    </button>
                </div>
            </div>
        </div>
    )
};


export default App;