import React from "react";
import styles from '../styles/Card.module.css'
import Explode from "./ExplodeButton";



function ExperienceCard(props) {

    let type = props.type.toLowerCase();
    const str = type.charAt(0).toUpperCase() + type.slice(1);
    
    
    return (
        <div className={styles.card}>

            <div className={styles.title_container}>
                <div className={styles.card_title}>
                    <div className={styles.title_description}>{`${str} Experience`}</div>
                    <div><h2>{props.title}</h2></div>
                </div>
                
                <div className={styles.emoj_container}>
                   <img src='/emoj.svg' className={styles.emoj} />
                </div>
            </div>

            <div className={styles.modal_buttons}>
                <button onClick={() => {props.setShowModal(true); props.setDescription(props.description) }}>
                    <div>About Experience</div>
                    <img src='/angle-right.svg' className={styles.angle}/>
                </button>

                <button onClick={() => {props.setShowModal(true); props.setDescription(props.rules)}}>
                    <div>Rules</div>
                    <img src='/angle-right.svg' className={styles.angle}/>
                </button>
            </div> 

            <div className={styles.description_container}>
                <div className={styles.description}>
                    <div><img src="/Hourglass.svg"/></div>
                    <div>Ends in 2 days</div>
                </div>

                <div className={styles.description}>
                    <div><img src="/Pulse.svg"/></div>
                    <div>2/{props.maxAttepmt} Attempts Left</div>
                </div>

                <div className={styles.description}>
                    <div><img src="/Present.svg"/></div>
                    <div>50% Off sale Voucher</div>
                </div>
            </div>
            


            <Explode text={'Play Now'} icon={'arrow-right.svg'} routeTo ={`/${str}Pannel`}/>

        </div>
    );
};

export default ExperienceCard;