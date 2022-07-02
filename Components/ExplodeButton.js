import React , {useState} from "react";
import {motion, AnimatePresence} from "framer-motion"
import { useRouter } from 'next/router'
import styles from '../styles/ExplodeButton.module.css'



function Explode(props) {

    const router = useRouter();
    const [detonate, setDetonate] = useState(false);
    
    return (
        <div className={styles.exploder}>   
            <AnimatePresence>
                {!detonate && <motion.button
                                style={{zIndex : '200'}}    
                                exit={{width : '35px',color: "black", overflow: "hidden"}} 
                                transition={{duration:0.3}}
                                className={styles.explore} 
                                onClick={() => {
                                    setDetonate(true); 
                                    setTimeout( () => router.push({pathname : props.routeTo, query: {_id : props._id}}), 800);}}> 
                                    <div>{props.text}</div>
                                    <img src={props.icon} className={styles.angle}/>
                                </motion.button>}
            </AnimatePresence> 
                    
            {detonate && <motion.div 
                            initial={{borderRadius: '50%'}}
                            animate={{backgroundColor: "#F5F7F6" ,scale:100}}
                            transition={{delay:0.2, duration:0.7}}
                            className={styles.explode}>
                        </motion.div>}
         </div>
    );

     
}

export default Explode;
