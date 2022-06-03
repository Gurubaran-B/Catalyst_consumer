import React from 'react';
import styles from '../styles/Progressbar.module.css';

function Progressbar({percent}) {
    let percentage = percent ? percent : 0;
    return(
        <div className={styles.progressStatus}>
            <span className={styles.progress} style={{width: `${percentage}%`}}></span>
        </div>
    );
};

export default Progressbar;