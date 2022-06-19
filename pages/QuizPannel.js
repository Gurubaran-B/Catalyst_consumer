import React, {useState, useContext} from "react";
import {motion, AnimatePresence} from "framer-motion";
import { HeaderContext } from "../Components/Layout";
import Progressbar from '../Components/Progressbar.js';
import QuizCard from '../Components/QuizCard.js';
import styles from '../styles/QuizPannel.module.css';
import Timer from "../Components/Timer.js";
import Reward from "./Reward.js";

function Quiz()
{
    let testData = {
        question_and_options: [
                        {
                            question: "Question 1",
                            question_asset: "https://adasdsad.com/asdas",
                            question_asset_type: "IMAGE",
                            options: [
                                {
                                    option_text: "option 1",
                                    option_asset: "https://adasdsad.com/asdas",
                                    option_asset_type: "IMAGE",
                                    correct_option: true,
                                    _id: "62720860383a33b721278705"
                                }
                            ],
                            _id: "62720860383a33b721278704"
                        },
                        {
                            question: "Question 2",
                            question_asset: "https://adasdsad.com/asdas",
                            question_asset_type: "IMAGE",
                            options: [
                                {
                                    option_text: "option 1",
                                    option_asset: "https://adasdsad.com/asdas",
                                    option_asset_type: "IMAGE",
                                    correct_option: false,
                                    _id: "62720860383a33b721278707"
                                },
                                {
                                    option_text: "option 2",
                                    option_asset: "https://adasdsad.com/asdas",
                                    option_asset_type: "IMAGE",
                                    correct_option: false,
                                    _id: "62720860383a33b721278708"
                                },
                                {
                                    option_text: "option 3",
                                    option_asset: "https://adasdsad.com/asdas",
                                    option_asset_type: "IMAGE",
                                    correct_option: true,
                                    _id: "62720860383a33b721278709"
                                }
                            ],
                            _id: "62720860383a33b721278706"
                        }
                    ]
    }
    
    let arr = testData.question_and_options;
    let loc = 100 / arr.length;

    const [current, setCurrent] = useState(0);
    const [percent, setPercent] = useState(0);
    const [score, setScore] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(10);
    const [gameStatus, setGameStatus] = useState(true);

    const [ , setShowHeader] = useContext(HeaderContext);
    
    setShowHeader(false);

    if (gameStatus)
        {
            return (
                <div className={styles.container}>
                    <div className={styles.progress}>
                        <Progressbar percent={percent} setGameStatus={setGameStatus}/> 
                    </div>

                    <motion.div
                        className={styles.focus}
                        initial={{opacity:0, y:'100vh'}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.8}}>

                        <div className={styles.timer}>
                            <Timer 
                                minutes= {minutes} 
                                seconds= {seconds}
                                setMinutes={setMinutes}
                                setSeconds={setSeconds}
                                setGameStatus={setGameStatus}
                            />
                        </div>

                    
                        <div className={styles.cardContainer}>
                            <div className={styles.cardStack}>   
                                {arr.map((e, i) =>
                                    { 
                                        return (
                                            <AnimatePresence key={e._id}>
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
                                                                        score = {score}
                                                                        setScore = {setScore}
                                                                        question = {e.question}
                                                                        question_asset = {e.question_asset}
                                                                        question_asset_type = {e.question_asset_type}
                                                                        options = {e.options}
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
                        
                    </motion.div>

                    <div className={styles.closebtn}>
                        <img src="closeNotch.svg" />
                        <img src="close_btn_white.svg" className={styles.close} />
                    </div>
                    
                </div>
            );
        }
    else 
        {
            return (<Reward/>);
        };
}

export default Quiz;