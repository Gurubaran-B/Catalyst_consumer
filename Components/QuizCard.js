import React from "react";
import styles from '../styles/QuizCard.module.css';
 

function QuizCard() {

    let options = ['One','Two','Three','Four'];

    return (
        <div className={styles.container}>
            <div>Select an answer</div>
            <h1>How many times a day you eat?</h1>
            <div className={styles.options}>
                {options.map((option, i) => (<div className={styles.option} key={i}>{option}</div>))}
            </div>
        </div>
    );
}

export default QuizCard;