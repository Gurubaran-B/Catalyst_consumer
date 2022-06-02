import React, {useState} from "react";
import {motion} from 'framer-motion';
import Header from "./Header";
import Modal from "./Modal";
import styles from '../styles/Layout.module.css'

export const ModalContext = React.createContext();

function Layout({children}) {

    const [showModal, setShowModal] = useState(false);
    
    return(
    
        <div className={styles.container}>
            <Header/>
            <ModalContext.Provider value={[showModal, setShowModal]}>
                <motion.div>
                    <Modal />
                </motion.div>
                {!showModal && children}
            </ModalContext.Provider>
        </div>

    );

};

export default Layout;