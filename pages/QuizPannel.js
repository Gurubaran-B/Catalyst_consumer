import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Progressbar from '../Components/Progressbar.js';
import QuizCard from '../Components/QuizCard.js';
import styles from '../styles/QuizPannel.module.css';

function Quiz()
{
    let arr = [1,2,3,4,5,6]
    let loc = 100 / arr.length;

    const [current, setCurrent] = useState(0);
    const [percent, setPercent] = useState(0);

    return(
        <div className={styles.container}>

            <div className={styles.progress}>
                <Progressbar percent={percent} /> 
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.cardStack}>
                    {arr.map((e, i) =>
                        { 
                            return (
                                <AnimatePresence key={e}>
                                    {(((i - current) >= 0) && ((i - current) < 3)) && 
                                        (<motion.div 
                                            className={styles.card}
                                            initial={{opacity:0, y:'100vh'}}
                                            animate={{opacity:1, y:0}}
                                            exit={{rotate: -60 ,x:'-100vw', opacity:0}}
                                            transition={{duration:0.8}}
                                            key={e}
                                            style={{
                                                        zIndex: `${300 - ((i - current) * 100)}`, 
                                                        width: `${100 - ((i - current) * 4)}%`, 
                                                        top:`${0 + ((i - current) * 10)}px`
                                                    }}>
                                                        <QuizCard 
                                                            loc = {loc}
                                                            cross = {(i - current)} 
                                                            current = {current} 
                                                            setCurrent={setCurrent}
                                                            percent = {percent}
                                                            setPercent= {setPercent}
                                                        />
                                            </motion.div>
                                        )
                                    }
                                </AnimatePresence>
                            );    
                        }) 
                    }
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