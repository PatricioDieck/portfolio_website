import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return( 
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div
        variants={fadeIn('right','spring',index,0.75)}
        className='w-full green-pink-gradient p-[1.5px] rounded-[20px] shadow-card'>
          <div
            options={{ 
              max: 25, 
              scale:1, 
              speed:850}}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className={`text-white text-[20px] font-bold text-center`}>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
    )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant}
      >
        <p className={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('','',0.1,1.5)}
        className={'mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'}>
        I am a software developer, financial analyst and entrepeneur with experience in financial software and real estate private equity. I studied Economics and Finance from UT Austin and am proficient in JS, React, React Native, ChatGPT, Node.js, Machine Learning, Python, and quick to learn anything needed for a project. I recently published my own mobile financial analyst, PocketAnalyst, that uses AI to automate financial analysis. I have worked as an acquisitions and development analyst for $100M+ real estate development deals with Castle Hill Partners and for the Red McCombs School of Business, where I conducted large-scale data processing experiments and helped produce peer-reviewed financial research. I am fluent in Spanish and have a strong background in leadership, negotiation, and sales. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about') 