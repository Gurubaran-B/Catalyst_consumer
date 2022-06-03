import React from "react";
import Progressbar from '../Components/Progressbar.js';
import QuizCard from '../Components/QuizCard.js';
import styles from '../styles/QuizPannel.module.css';

function Quiz()
{
    return(
        <div className={styles.container}>

            <div className={styles.progress}>
                <Progressbar percent={66} /> 
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.cardStack}>
                    <div className={styles.card} style={{zIndex: 400, width: '100%', top:0}}><QuizCard /></div>
                    {/* <div className={styles.card} style={{zIndex: 300, width: '96%', top:10}}><QuizCard /></div>
                    <div className={styles.card} style={{zIndex: 200, width: '92%', top:20}}><QuizCard /></div>
                    <div className={styles.card} style={{zIndex: 100, width: '88%', top:30}}><QuizCard /></div> */}
                </div>
            </div>

            <div className={styles.closebtn}>
                <img src="closeNotch.svg" />
                <img src="close_btn_white.svg" className={styles.close} />
            </div>
            
        </div>
    );
}

export default Quiz;