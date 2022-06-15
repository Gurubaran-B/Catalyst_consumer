import React from "react";
import Progressbar from "./Progressbar";
import styles from '../styles/RewardCard.module.css';

function RewardCard({}) {

    let percent = 50;
 
    return (
        <div className={styles.card}>

            <div className={styles.title}>Congratulations!</div>

            <div className={styles.description}>You have won muscle badge as a reward.</div>

            <div className={styles.badgeProgress}>
                <div className={styles.scoreStreak}><img src="score_board.svg"/></div>
                <div  className={styles.progress}><Progressbar percent ={percent}/></div>
                <div className={styles.status}>{percent} %</div>
            </div>

            
            <div>
                <button className={styles.explore}>
                        <div>Explore more</div>
                        <img src='arrow-right.svg' className={styles.angle}/>
                </button>
            </div>
        </div>
    );
};

export default RewardCard;