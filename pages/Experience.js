import { useRouter } from 'next/router';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css'
import ExperienceCard from '../Components/ExperienceCard.js'
import { useEffect, useState} from "react";
import Header from '../Components/Header';
import Modal from '../Components/Modal';


export default function Experience() {

  const { query, isReady } = useRouter();
  const[experience, setExperience] = useState([])
  const[locate, setLocate] = useState();
  const[max, setMax] = useState();
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState();
  
  function prevCampaign() {
    (locate <= 0) ? setLocate(experience.length - 1) : setLocate(locate - 1);
  };

  function nextCampaign() {
      (locate == (experience.length - 1)) ? setLocate(0) : setLocate(locate + 1);
  };


   function getExperienceData() {
    axios({
      url: "http://localhost:4002/api/v2/experience/getAllLiveExperience?brand_id=628dbaf1d79282edd4d061e5",
      method: "GET",})
      .then((res) => {
        let holder = res.data.experiences.reduce((acc, curr) => {
        let existing_obj = acc.find(i => i.campaign_setup._id == curr.brand_campaign_associated._id)

        if(existing_obj)
          {
            existing_obj.experiences.push(curr)
          }
        else
          {
              let obj = {}
              obj.campaign_setup = curr.brand_campaign_associated
              obj.experiences = [curr]
              acc.push(obj)
          }
        return(acc);
        },[])

        holder.map((el, i) => {
          if ((el.campaign_setup._id) == (query._id))
          {
            setLocate(i)
          }
        })

        setMax(holder.length)
        setExperience(holder)})
      .catch((err) => {console.log(err)});
  }


  useEffect(() => {
    (isReady) && getExperienceData();
  },[isReady]);
        
  
  return (
    <>
      {!showModal && <><Header/>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.6}}
        className={styles.main_experience}>

        <div className={styles.container_experience}>

          <button className={styles.next} onClick={() => prevCampaign()} ><img src='/Arrow 1.svg'/></button>

          <div className={styles.halo_container}>
            <div><img src='/Group 20.svg' className={styles.halo}/></div>
            <div className={styles.svg_container}><img src='/emoj.svg' className={styles.svg} /></div>
            <div><img src='/Group 19.svg' className={styles.halo}/></div>
          </div>

          <button className={styles.next} onClick={() => nextCampaign()}><img src='/Arrow 2.svg'/></button>

        </div>

        <div className={styles.title_display}>

          <h1>{experience[locate]?.campaign_setup?.campaign_name}</h1>

          <div className={styles.buttons}>
            <button><img src='/score_board.svg' className={styles.score}/></button>
            <button><img src='/award.svg' className={styles.award}/></button>
          </div>

          <div className={styles.container_description}>
            <div onClick={() => {setShowModal(true); setDescription(experience[locate]?.campaign_setup?.campaign_description) }}><u>Description</u></div>
            <div onClick={() => {setShowModal(true); setDescription(experience[locate]?.campaign_setup?.campaign_goal_description) }}><u>Instructions</u></div>
          </div>

        </div>

        <div className={styles.card_container1}>

          <div className={styles.selector}>
            <div><h2>Every</h2></div>
            <div><h2>New</h2></div>
            <div><h2>Featured</h2></div>
          </div>

          <div className={styles.experienceList}>
              {experience[locate]?.experiences?.map((exp) => 
                  <div className={styles.experienceElement} key={exp._id}>
                    <ExperienceCard
                    title={exp.experience_name}
                    description={exp.experience_short_description}
                    maxAttepmt={exp.max_attempts}
                    rules={exp.experience_rules}
                    type={exp.experience_type} 
                    setShowModal={setShowModal}
                    setDescription={setDescription}/>
                </div>)}
          </div>
        </div>

      </motion.div></>} 
      {showModal && <Modal setShowModal={setShowModal} description={description}/>}
    </>
  );
};