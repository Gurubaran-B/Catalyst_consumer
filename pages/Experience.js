import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css'
import ExperienceCard from '../Components/ExperienceCard.js'
import { HeaderContext, ExperienceContext } from "./_app";
import { useContext } from "react";

export default function Experience() {

  const [ , setShowHeader] = useContext(HeaderContext);
  const[experience, setExperience] = useContext(ExperienceContext);
  setShowHeader(true);

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.6}}
    className={styles.main_experience}>

      <div className={styles.container_experience}>

        <button className={styles.next}><img src='Arrow 1.svg'/></button>

        <div className={styles.halo_container}>

          <div><img src='Group 20.svg' className={styles.halo}/></div>

          <div className={styles.svg_container}><img src='emoj.svg' className={styles.svg} /></div>

          <div><img src='Group 19.svg' className={styles.halo}/></div>

        </div>

        <button className={styles.next}><img src='Arrow 2.svg'/></button>

      </div>

      <div className={styles.title_display}>

        <h1>{experience.campaign_setup.campaign_name}</h1>

        <div className={styles.buttons}>

          <button><img src='score_board.svg' className={styles.score}/></button>

          <button><img src='award.svg' className={styles.award}/></button>

        </div>

        <div className={styles.container_description}>

          <div><u>Description</u></div>

          <div><u>Instructions</u></div>

        </div>

      </div>

      <div className={styles.card_container1}>

        <div className={styles.selector}>
          <div><h2>Every</h2></div>
          <div><h2>New</h2></div>
          <div><h2>Featured</h2></div>
        </div>

        <div className={styles.experienceList}>
             {experience.experiences.map(() => <div className={styles.experienceElement}><ExperienceCard /></div>)}
        </div>

      </div>

    </motion.div>

    
  );
};