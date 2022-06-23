import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ModalContext, ModalDataContext } from "../pages/_app";
import styles from "../styles/Modal.module.css"

function Modal() {

    const [showModal, setShowModal] = useContext(ModalContext);
    const [showDataModal, setShowDataModal] = useContext(ModalDataContext);

    return (
        <>
            {showModal && <motion.div 
                initial={{ opacity:0, y: '100vh'}}
                animate={{opacity:1, y: 0}}
                exit={{opacity:0}}
                transition={{duration: 1.2}}
                className={styles.modal}>
                
                <div className={styles.container}>

                    <div className={styles.closeBtn}><button onClick={() => setShowModal(false)}><img src='close_btn.svg' /></button></div>
                    
                    <div className={styles.title}>Description</div>

                    <div className={styles.message}>{showDataModal}</div>
                    
                    <div className={styles.okBtn}><button>Proceed</button></div>

                </div>
            </motion.div> }  
        </>  
    );

};

export default Modal;