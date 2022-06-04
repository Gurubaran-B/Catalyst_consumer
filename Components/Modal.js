import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ModalContext } from "./Layout";
import styles from "../styles/Modal.module.css"

function Modal() {

    const [showModal, setShowModal] = useContext(ModalContext);

    return(
        <div>

            {showModal && <motion.div 
                            initial={{ opacity:0, y: '100vh'}}
                            animate={{opacity:1, y: 0}}
                            exit={{opacity:0}}
                            transition={{duration: 1.2}}
                            className={styles.modal}>
                            
                            <div className={styles.container}>

                                <div className={styles.closeBtn}><button onClick={() => setShowModal(false)}><img src='close_btn.svg' /></button></div>
                                
                                <div className={styles.title}>Description</div>

                                <div className={styles.message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                
                                <div className={styles.okBtn}><button>Proceed</button></div>

                            </div>

                        </motion.div> 
            }

        </div>
        
    );

};

export default Modal;