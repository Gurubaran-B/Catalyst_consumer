import React from 'react';
import RewardCard from '../Components/RewardCard.js'
import { HeaderContext } from "./_app";
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import muscle from '../asset/Lottie/muscle.json';
import sparkle from '../asset/Lottie/✨.json';
import { useContext } from "react";

import styles from '../styles/Reward.module.css';

function Reward() {

    const [ , setShowHeader] = useContext(HeaderContext);
    
    setShowHeader(false);

    const badge = {
        loop: true,
        autoplay: true,
        animationData: muscle,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const glitter = {
        loop: true,
        autoplay: true,
        animationData: sparkle,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return (
        <div>
            <motion.div 
                className={styles.container}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration:0.5}}>
                
                <motion.div 
                    className={styles["outer"] + " " + styles["circle"]}
                    initial={{scale: 0.9}}
                    animate={{scale: 1.3}}
                    transition={{duration:1.2, scale: { type: "spring", stiffness: 250, mass: 3.5, bounce: 10 }}}>

                    <motion.div 
                        className={styles["inner"] + " " + styles["circle"]}
                        initial={{scale: 1.2, boxShadow: '0px 0px 25px 5px rgba(255, 252, 58, 0.3), 0px 0px 25px 5px rgba(253, 158, 48, 0.3)' }}
                        animate={{scale: 1, boxShadow: '0px 0px 25px 5px rgba(63, 61, 61, 0.3)' }}
                        transition={{duration:1, scale: { type: "spring", stiffness: 250, mass: 3.5, bounce: 10 }}}> 
                        
                        <div className={styles.field}>

                            {/* <div className={styles.ellipse}><img src='Ellipse.svg'/></div> */}

                            

                            <motion.div
                                className={styles.emoj}
                                initial={{scale: 1.3}}
                                animate={{scale: 0.9}}
                                transition={{duration:0.8, scale: { type: "spring", stiffness: 250, mass: 3.5, bounce: 10 }}}>
                                
                                <Lottie
                                    options={badge}
                                    height={110}
                                    width={110}/>

                                

                            </motion.div>

                            <motion.div
                                className={styles.fieldElements}>

                                

                                <motion.div 
                                    className={styles.globe}
                                    initial={{scale: 1}}
                                    animate={{scale: 0.6}}
                                    transition={{duration: 1}}
                                    // animate={{rotate: -360}}
                                    // transition={{loop: Infinity, duration: 10, ease: 'linear'}}
                                    >

                                    <Lottie
                                    options={glitter}
                                    height={120}
                                    width={120}/>

                                </motion.div>

                                <motion.div 
                                    className={styles.cube}
                                    initial={{scale: 1}}
                                    animate={{scale: 0.6}}
                                    transition={{duration: 1}}
                                    // animate={{rotate: 360}}
                                    // transition={{loop: Infinity, duration: 10, ease: 'linear'}}
                                    >

                                    <Lottie
                                    options={glitter}
                                    height={80}
                                    width={80}/>

                                </motion.div>

                                

                            </motion.div>

                            

                        </div>

                    </motion.div>

                </motion.div>

            </motion.div>

            <div className={styles.bottom}>
                <RewardCard/>
            </div>

        </div>
    );

};

export default Reward;