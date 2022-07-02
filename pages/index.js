import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from '../styles/Home.module.css'
import Card from '../Components/Card.js'
import Carousel from '../Components/Carousel'
import Header from "../Components/Header";
import Modal from "../Components/Modal";


export default function Home(props) {

  const [campaigns, setCampaigns] =  useState([]);
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState();
  const [rules, setRules] = useState();

  useEffect(() => { 
    if (typeof window !== "undefined") {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjJiZDUxM2U2MzFjOTNhZTZiMmQxNmUyIiwiYXV0aF90eXBlIjoiTU9CSUxFIiwiaWF0IjoxNjU2NTc0MjcwfQ.ZMhbah4bTzcRl8RgCynMX6RTi3rYwlFELvwHnZS0m1w')
    }
    getExperienceData(); 
  },[]);
     
  function getExperienceData() {
    axios({
      url: "http://localhost:4002/api/v2/experience/getAllLiveExperience?brand_id=628dbaf1d79282edd4d061e5",
      method: "GET",
      headers: { Authorization : `Bearer ${localStorage.getItem("token")}`}})
      .then((res) => {
        if(Array.isArray(res.data.experiences)){
        let holder = dataAggregate(res.data.experiences);
        setCampaigns(holder)
        } else {
          let buffer = [res.data.experience]
          let holder = dataAggregate(buffer);
          setCampaigns(holder)
        }
      })
      .catch((err) => {console.log(err)});
  }

  function dataAggregate (result) {
    let data = result?.reduce((acc, curr) => {
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
    return (data);
  }


  return (
    <>
    {!showModal && <>
      <Header/>
      <div className={styles.main}>
        
        <div className={styles.container}>
          <img src='heroBanner_sample.png' className={styles.banner} />
        </div>

        <div className={styles.card_container}>
          <div className={styles.info}>
            <div>Hi there 🔥,</div>
            <div>Let's Take a look at the campaigns,</div>
          </div>

          <div className={styles.carousel}>
            <Carousel>
              {campaigns?.map((data, i) => 
                <Card title={data.campaign_setup.campaign_name}
                      description = {data.campaign_setup.campaign_description}
                      instruction = {data.campaign_setup.campaign_goal_description}
                      _id = {data.campaign_setup._id} 
                      key={data.campaign_setup._id}
                      setShowModal={setShowModal}
                      setDescription={setDescription}
                      total={campaigns.length}
                      current={i + 1}
                      />)}   
            </Carousel>
          </div>
        </div>
      </div>
    </>} 

    {showModal && <Modal setShowModal={setShowModal} description={description}/>}
    </>   
  );

};


// 
