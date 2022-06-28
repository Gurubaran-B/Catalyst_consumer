import React from "react";
import { HeaderContext } from "../pages/_app";
import styles from '../styles/Header.module.css'
import { useContext } from "react";



function Header() {
   
    const [showHeader, setShowHeader ] = useContext(HeaderContext);
    
    return(
        <>
            {showHeader && 
            <div className={styles.header}>
            <div className=""><img src='/menu_icon.svg' alt="menu" /></div>
            <div className=""><input className={styles.search} placeholder="Browse" /></div>
            <div className=""><img src='/notification_icon.svg' alt="notification" /></div>
            </div>}
        </>
    );

};

export default Header;