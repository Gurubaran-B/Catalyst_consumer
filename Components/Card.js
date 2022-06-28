import React, { useState } from "react";
import styles from '../styles/Card.module.css'
import Explode from "./ExplodeButton";


function Card(props) {

    return (
        <div className={styles.card}>

            <div className={styles.title_container}>

                <div className={styles.card_title}>
                    <div className={styles.title_description}>Campaigns 1/3</div>
                    <div><h2>{props.title}</h2></div>
                </div>

                <div className={styles.emoj_container}>
                   <img src='emoj.svg' className={styles.emoj} />
                </div>

            </div>

            <div className={styles.modal_buttons}>

                <button onClick={() => {props.setShowModal(true); props.setDescription(props.description) }}>
                    <div>Description</div>
                    <img src='angle-right.svg' className={styles.angle}/>
                </button>

                <button onClick={() => {props.setShowModal(true); props.setDescription(props.instruction)}}>
                    <div>Instructions</div>
                    <img src='angle-right.svg' className={styles.angle}/>
                </button>

            </div> 

            <div className={styles.buttons_container}>      

                <div className={styles.buttons}>
                    <button><img src='score_board.svg' className={styles.score}/></button>
                    <button><img src='award.svg' className={styles.award}/></button>
                </div>

                <div className={styles.play}><Explode text={'Explore'} icon={'arrow-right.svg'}  _id={props._id}  routeTo={`Experience`}/></div>
               

            </div>

        </div>
    );
};

export default Card;