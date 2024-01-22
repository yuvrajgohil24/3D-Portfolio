import React from 'react'
import { Tilt } from 'react-tilt';
import {motion } from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({title, index, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-6xl leading-[32px]'>
      - I'm a skilled software developer with good experience of almost 2.5 years in {<b>ReactJS</b>}  <br />  <br />
      - I've worked on various Frontend technologies like {<b>HTML5, CSS3, BootStrap, Tailwind, JavaScript, ReactJS </b>} and Backend technologies like {<b>NodeJS, ExpressJS, MongoDB</b>} and now I am using some 3D animations libraries like {<b>ThreeJS, Framer-Motion</b>}. <br /><br />

      - I am a 5-star coder in C++ at {<b>HackerRank</b>} ⭐. And I have good knowledge of {<b>Data Structures and Algorithms.</b>} <br /> <br />
      
      - Additionally, my skills extend to {<b>Mobile App Development</b>}, where I use the versatility of {<b>React Native</b>} to create cross-platform applications.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}

    </div>

    </>
  )
}

export default SectionWrapper(About, "about");