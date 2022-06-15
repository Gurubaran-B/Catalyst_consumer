import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModalContext } from "./Layout";
import { useRouter } from 'next/router'
import styles from '../styles/Card.module.css'

function Card({}) {

    const router = useRouter();

    const [showModal, setShowModal] = useContext(ModalContext);
    const [detonate, setDetonate] = useState(false);
    
    return (
        <div className={styles.card}>

            <div className={styles.title_container}>

                <div className={styles.card_title}>
                    <div className={styles.title_description}>Campaigns 1/3</div>
                    <div><h2>Wild Workout Week 2</h2></div>
                </div>

                <div className={styles.emoj_container}>
                   <img src='emoj.svg' className={styles.emoj} />
                </div>

            </div>

            <div className={styles.modal_buttons}>

                <button onClick={() => setShowModal(true)}>
                    <div>Description</div>
                    <img src='angle-right.svg' className={styles.angle}/>
                </button>

                <button onClick={() => setShowModal(true)}>
                    <div>Instructions</div>
                    <img src='angle-right.svg' className={styles.angle}/>
                </button>

            </div> 

            <div className={styles.buttons_container}>      

                <div className={styles.buttons}>
                    <button><img src='score_board.svg' className={styles.score}/></button>
                    <button><img src='award.svg' className={styles.award}/></button>
                </div>

                <div className={styles.exploder}>   
                    <AnimatePresence>
                        {!detonate && <motion.button
                                        exit={{width : '35px', color:"black", overflow: "hidden"}} 
                                        transition={{duration:0.3}}
                                        className={styles.explore} onClick={() => {setDetonate(true); setTimeout( () => router.push('/Experience'), 800) }}> 
                                            {<div>Explore</div>}
                                            {<img src='arrow-right.svg' className={styles.angle}/>}
                                        </motion.button>}
                    </AnimatePresence> 
                    
                    {detonate && <motion.div 
                                    initial={{borderRadius: '50%'}}
                                    animate={{backgroundColor: "#F5F7F6" ,scale:100}}
                                    transition={{delay:0.2, duration:0.8}}
                                    className={styles.explode}></motion.div>}
                </div>

            </div>

        </div>
    );
};

export default Card;