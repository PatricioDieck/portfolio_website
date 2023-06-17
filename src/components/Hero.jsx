import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'
import {EarthCanvas } from './canvas'
import headshot from '../assets/headshot.png'



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>

          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />

        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm 
            <span className='text-[#915eff]'> Patricio</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop financial software, <br className='sm:block hidden' /> AI products, and web applications.   
          </p>
        </div>
      </div>
      <div dir= "rtl" className='absolute l:top- top-72 start-0 start-0 w-full h-screen'>
      <img className='md:mt-5 lg:mt-0 mt-10 md:mr-20 md:mt-15 mr-10 md:w-[60%] lg:w-[50%] w-[75%] flex items-center ' src={headshot} alt='Patricio' />
     </div>
      {/* <ComputersCanvas /> */}
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}


    </section>
  )
}

export default Hero