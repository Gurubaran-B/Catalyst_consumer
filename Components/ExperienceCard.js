import React from "react";
import styles from '../styles/Card.module.css'
import Explode from "./ExplodeButton";

function ExperienceCard() {
    return (
        <div className={styles.card}>

            <div className={styles.title_container}>
                <div className={styles.card_title}>
                    <div className={styles.title_description}>Quiz Experience</div>
                    <div><h2>Quiz about the diet forms </h2></div>
                </div>
                
                <div className={styles.emoj_container}>
                   <img src='emoj.svg' className={styles.emoj} />
                </div>
            </div>

            <div className={styles.modal_buttons}>
                <button>
                    <div>About Experience</div>
                    <img src='angle-right.svg' className={styles.angle}/>
                </button>

                <button>
                    <div>Rules</div>
                    <img src='angle-right.svg' className={styles.angle}/>
                </button>
            </div> 

            <div className={styles.description_container}>
                <div className={styles.description}>
                    <div><img src="Hourglass.svg"/></div>
                    <div>Ends in 2 days</div>
                </div>

                <div className={styles.description}>
                    <div><img src="Pulse.svg"/></div>
                    <div>2/3 Attempts Left</div>
                </div>

                <div className={styles.description}>
                    <div><img src="Present.svg"/></div>
                    <div>50% Off sale Voucher</div>
                </div>
            </div>
            

            <Explode text={'Play Now'} icon={'arrow-right.svg'} routeTo ={'/OpinionPannel'}/>

        </div>
    );
};

export default ExperienceCard;