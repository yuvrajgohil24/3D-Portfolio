import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, index, icon }) => {
  return (
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
        I'm a Full Stack Developer specializing in MERN and Next.js ecosystems. I build scalable, cloud-ready, and high-performance web applications with a strong focus on clean UI/UX and efficient backend systems. <br />💡Here are some highlights of my work:
        <br /><br />

        • Migrated 100+ APIs from Laravel to MERN stack, improving scalability and cutting bug reports by 25%.
        <br /><br />

        • Optimized backend performance, reducing response times by 35% and speeding up release cycles from 3 days to 1 day with Docker & Jenkins.
        <br /><br />

        • Delivered 10+ pixel-perfect, responsive UIs from Figma, reducing page load time by 30% and boosting user retention.
        <br /><br />

        • Revamped a company site, improving load speed by 40% and increasing session duration by 150%, leading to a 5x surge in client acquisition.
        <br /><br />

        • Currently developing ThinkSpace, a real-time collaborative whiteboard app with live cursor presence and infinite canvas.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(About, "about");