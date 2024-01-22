import React from "react";
import styles from './Hero.module.css'
import AutoType from "../autoTypeWrite/AutoType";
import { getImageUrl } from "../../utils";

import resume from "../../RoshanResume.pdf"
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* <h1 className={styles.title}>Hi, My Name is <span style={{color:"red"}}>Roshan</span></h1>
        <p className={styles.discription}>I'm a full-stack Developer</p> */}
        <AutoType/>
        <div className={styles.resume}>
          <a href="#contact" className={styles.contactBtn}>Contact Me</a>
          <a href={resume} download="Roshan Resume" className={styles.contactBtn}>Download CV</a>
        </div>
      </div>
      <img src={getImageUrl('hero/roshan.jpg')} alt="Roshan Image" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
