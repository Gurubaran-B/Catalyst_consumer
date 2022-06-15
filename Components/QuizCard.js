import React from "react";
import {motion} from "framer-motion";
import styles from '../styles/QuizCard.module.css';
 

function QuizCard(props) {

    let options = props.options;

    function next()
    {
        props.setCurrent(props.current + 1); 
        props.setPercent(props.percent + props.loc)
    };

    function reveal() {
        options.forEach((option, i) => {
            if (option.correct_option) 
            {
                document.getElementById(option._id).classList.add(styles.correctOption);
            }
        });

    }
    
    function validate(answer, e)
    {
        if (answer)
            {
                e.target.classList.add(styles.correctOption);
                props.setScore(props.score + 1);
            }
        else
            {
                e.target.classList.add(styles.inCorrectOption);
                setTimeout(reveal,200)
            }

        setTimeout(next,500)
    };

   
    return (
        (props.cross === 0) &&
        <motion.div
            initial={{opacity:0}} 
            animate={{opacity:1, scale:1.002}}
            transition={{duration:0.3, delay:0.15}}
            className={styles.container}> 

            <div>Select an answer</div>
            <h1>{props.question}</h1>

            <div className={styles.options}>
                {options.map((option, i) => 
                                (<div onClick={(e) => validate(option.correct_option, e)} 
                                    className={styles.option} 
                                    id={option._id}
                                    key={option._id}>
                                        {option.option_text}
                                    </div>
                                )
                            )
                }
            </div>
        </motion.div>    
    );
}

export default QuizCard;