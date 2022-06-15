import React from 'react';
import styles from '../styles/Progressbar.module.css';

function Progressbar({percent, setGameStatus}) {
    let percentage = percent ? percent : 0;
    
    if (percent === 100)
    {
        setGameStatus(false); 
    }

    return(
        <div className={styles.progressStatus}>
            <span className={styles.progress} style={{width: `${percentage}%`}}></span>
        </div>
    );
};

export default Progressbar;