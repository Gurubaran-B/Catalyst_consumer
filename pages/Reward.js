import React from 'react';
import RewardCard from '../Components/RewardCard.js'
import styles from '../styles/Reward.module.css';

function Reward() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles["outer"] + " " + styles["circle"]}>
                    <div className={styles["inner"] + " " + styles["circle"]} >
                        <div className={styles.field}>
                            <div className={styles.ellipse}><img src='Ellipse.svg'/></div>
                            <div className={styles.emoj}>💪🏻</div>
                            <div className={styles.globe}><img src='Globe.svg'/></div>
                            <div className={styles.cube}><img src='Cube.svg'/></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <RewardCard/>
            </div>

        </div>
    );

};

export default Reward;