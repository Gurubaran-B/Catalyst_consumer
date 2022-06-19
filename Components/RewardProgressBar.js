import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Progressbar.module.css';

function Progressbar({percent}) {
    let percentage = percent ? percent : 0;
    
    return(
        <motion.div 
            className={styles.progressStatus}
            initial={{scale: 1.2}}
            animate={{scale:1}}
            transition={{duration: 1}}>
            
            <motion.span className={styles.progress}
            initial={{width: 0}} 
            animate={{width: `${percentage}%`}}
            transition={{duration: 0.2 , delay: 0.2}}></motion.span>

        </motion.div>
    );
};

export default Progressbar;