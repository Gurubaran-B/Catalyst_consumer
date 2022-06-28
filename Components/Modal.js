import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/Modal.module.css"

function Modal(props) {

    return (
        
        <motion.div 
            initial={{ opacity:0, y: '100vh'}}
            animate={{opacity:1, y: 0}}
            exit={{opacity:0}}
            transition={{duration: 1.2}}
            className={styles.modal}>
            
            <div className={styles.container}>

                <div className={styles.closeBtn}><button onClick={() => props.setShowModal(false)}><img src='close_btn.svg' /></button></div>
                
                <div className={styles.title}>Description</div>

                <div className={styles.message}>{props.description}</div>
                
                <div className={styles.okBtn}><button>Proceed</button></div>

            </div>
        </motion.div> 
         
    );

};

export default Modal;