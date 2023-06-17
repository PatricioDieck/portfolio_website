import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon, link}) => {
  return( 
    <Tilt className="xs:w-[250px] w-full" >
      <a href={link} target="_blank" rel="noopener noreferrer">
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
      </a>
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
        variants={fadeIn('','',0.1,0.1)}
        className={'mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'}>
        As a technical entrepreneur with a background in financial analysis, I offer a unique blend of expertise in software development and private equity. Notably, I developed and published <a href="http://pocketanalyst.app" className='text-blue-200 underline'>PocketAnalyst</a>, a tool that harnesses AI to transform financial analysis. My professional journey includes impactful roles at Castle Hill Partners and the Red McCombs School of Business, where I helped manage $100M+ real estate deals and contributed to financial research respectively.<br/><br/>

        My academic grounding from the University of Texas, Austin, in Economics and Finance, compliments my proficiency in diverse programming languages, including JS, React, React Native, ChatGPT, Node.js, Python, and Machine Learning. <br/><br/>
        
        I'm a fluent Spanish speaker with leadership, negotiation, and sales skills under my belt. But more than anything, I'm an enterprising developer who sees the big picture.
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