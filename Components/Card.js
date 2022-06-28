import React, { useContext } from "react";
import { ModalContext, ModalDataContext } from "../pages/_app";
import styles from '../styles/Card.module.css'
import Explode from "./ExplodeButton";


function Card(props) {

    const [showModal, setShowModal] = useContext(ModalContext);
    const [description, setDescription] = useContext(ModalDataContext);
    const [rules, setRules] = useContext(ModalDataContext);

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

                <button onClick={() => {setShowModal(true); setDescription(props.description) }}>
                    <div>Description</div>
                    <img src='angle-right.svg' className={styles.angle}/>
                </button>

                <button onClick={() => {setShowModal(true); setDescription(props.instruction)}}>
                    <div>Instructions</div>
                    <img src='angle-right.svg' className={styles.angle}/>
                </button>

            </div> 

            <div className={styles.buttons_container}>      

                <div className={styles.buttons}>
                    <button><img src='score_board.svg' className={styles.score}/></button>
                    <button><img src='award.svg' className={styles.award}/></button>
                </div>

                <div className={styles.play}><Explode text={'Explore'} icon={'arrow-right.svg'} experience={props.experience} _id={props._id}  routeTo={`campaigns/Experience`}/></div>
               

            </div>

        </div>
    );
};

export default Card;