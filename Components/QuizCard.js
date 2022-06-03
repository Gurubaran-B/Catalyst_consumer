import React from "react";
import {motion} from "framer-motion";
import styles from '../styles/QuizCard.module.css';
 

function QuizCard({current,setCurrent,cross,loc,percent,setPercent}) {

    let options = ['One','Two','Three','Four'];

    return (
        (cross === 0) &&
        <motion.div
            initial={{opacity:0}} 
            animate={{opacity:1, scale:1.002}}
            transition={{duration:0.4, delay:0.2}}
            className={styles.container}> 
            <div>Select an answer</div>
            <h1>How many times a day you eat?</h1>
            <div className={styles.options}>
                {options.map((option, i) => (<div onClick={() => {setCurrent(current + 1); setPercent(percent + loc)}} className={styles.option} key={i}>{option}</div>))}
            </div>
        </motion.div>
    );
}

export default QuizCard;