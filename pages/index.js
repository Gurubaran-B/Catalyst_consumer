import React, {useContext, useState} from "react";
import Head from 'next/head'
import Image from 'next/image'
import { HeaderContext } from "../Components/Layout";
import styles from '../styles/Home.module.css'
import Card from '../Components/Card.js'
import Carousel from '../Components/Carousel'

export default function Home() {

  const [ , setShowHeader] = useContext(HeaderContext);

  setShowHeader(true);

  return (   
    <div className={styles.main}>
      
      <div className={styles.container}>
        <img src='heroBanner_sample.png' className={styles.banner} />
      </div>

      <div className={styles.card_container}>
        <div className={styles.info}>
          <div>Hi there 🔥,</div>
          <div>Let's Take a look at the campaigns,</div>
        </div>
  
        <Carousel>
            <Card />
            <Card />
            <Card />
            <Card />
        </Carousel>

      
      </div>
    </div>
  );

};
