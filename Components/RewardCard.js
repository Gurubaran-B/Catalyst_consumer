import React from "react";
import Progressbar from "./Progressbar";
import Lottie from 'react-lottie';
import confitte from '../asset/Lottie/🎊.json';
import styles from '../styles/RewardCard.module.css';

function RewardCard({}) {

    let percent = 50;
    const confitteBall = {
        loop: false,
        autoplay: true,
        animationData: confitte,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
 
    return (
        <div className={styles.card}>

            <div className={styles.lottie}>
                            <Lottie
                            options={confitteBall}
                            height={120}
                            width={120}/>
            </div>

            <div className={styles.cardContent}>
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

        </div>
    );
};

export default RewardCard;