import React from "react";
import {motion} from "framer-motion";
import styles from '../styles/QuizCard.module.css';
 

function OpinionCard(props) {

    let options = props.options;

    function next()
    {
        props.setCurrent(props.current + 1); 
        props.setPercent(props.percent + props.loc)
    };

    function validate(e)
    {
        e.target.classList.add(styles.opinion);
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
                                (<div onClick={(e) => validate(e)} 
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

export default OpinionCard;