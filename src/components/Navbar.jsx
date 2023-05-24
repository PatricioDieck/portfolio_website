import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles'
import { NavLinks } from '../constants/index'
import {logo, menu, close, headshot} from '../assets'

const Navbar = () => {
  useState[active, setActive] = useState('')

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>

        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick = {() => {
            setActive('');
          }}/>
        <img src={headshot} alt='headshot' className='w-9 h-9 object-contain' />
        <p className='text-white text-[18px] font-bold cursor-pointer'>Patricio Dieck</p>
      </div>

    </nav>
  )
}

export default Navbar