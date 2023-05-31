import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline' // Ensure to install @heroicons package


import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {

  return (
    <div
      className="xl:mt-8 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden "
    >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact</h3>
      <div className="space-y-10 mb-10 mt-8 text-lg">
        <div className="flex items-center mt-4">
          <MailIcon className="h-6 w-6 mr-2 text-white" />
          <a href="mailto:pdieck98@gmail.com" className="text-white fontsize-lg hover:text-green-500">pdieck98@gmail.com</a>
        </div>

        <div className="flex items-center mt-4">
          <PhoneIcon className="h-6 w-6 mr-2 text-white" />
          <a href="tel:+15125902601" className="text-white fontsize-lg hover:text-green-500">(512) 590-2601</a>
        </div>

        <div className="flex items-start mt-4">
          <LocationMarkerIcon className="h-6 w-6 mr-2 text-white" />
          <div className="text-white fontsize-lg">
            <p>301 E 47th St. ∙ New York, New York</p>
            <p className="mt-2">17912 Clairess Ln ∙ Manor, TX</p>
          </div>
        </div>
      </div>
    </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[550px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')