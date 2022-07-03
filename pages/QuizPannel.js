import React, {useState, useEffect} from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import {motion, AnimatePresence} from "framer-motion";
import Progressbar from '../Components/Progressbar.js';
import QuizCard from '../Components/QuizCard.js';
import styles from '../styles/QuizPannel.module.css';
import Timer from "../Components/Timer.js";


function Quiz()
{
    const router = useRouter();
    const { query, isReady } = useRouter();
    const [experience, setExperience] = useState([]);
    const [current, setCurrent] = useState(0);
    const [percent, setPercent] = useState(0);
    const [score, setScore] = useState(0);
    const [gameStatus, setGameStatus] = useState(true);

    useEffect(() => { (isReady) && getExperienceData(); },[isReady]);
  
   function getExperienceData() {
    axios({
      url: `http://localhost:4002/api/v2/experience/initiateQuizExperience?exp_id=${query._id}`,
      method: "GET",
      headers: { Authorization : `Bearer ${localStorage.getItem("token")}`}})
      .then((res) => {
          setExperience(res.data.experience.experience_spec)})
      .catch((err) => {console.log(err)});
  }

    let testData = experience; 
    console.log(testData.time_to_complete) 
    let arr = testData?.question_and_options;
    let loc = 100 / arr?.length;

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
                                min= {2}
                                sec= {0}
                                setGameStatus={setGameStatus}
                            />
                        </div>

                    
                        <div className={styles.cardContainer}>
                            <div className={styles.cardStack}>   
                                {arr?.map((e, i) =>
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
            router.push('/Reward');
        };
}

export default Quiz;