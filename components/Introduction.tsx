/* eslint-disable @next/next/no-img-element */
import React from 'react'
import profileImage from '../assets/img/profileImage.jpg'
import SocialLinks from './Socials/SocialLinks'
import { useContext } from 'react'
import { DataContext, EnvContext } from '../context'
import { useImageBuilder } from '../hooks'
import { motion } from 'framer-motion'

type Props = {}

function Introduction({}: Props) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  }
  const { user } = useContext(DataContext)
  const { projectId, dataset } = useContext(EnvContext)

  const currentUser = user && user[0]
  const image = useImageBuilder(projectId, dataset, currentUser.profilePicture)
  return (
    <div className='flex bg-royal/50 p-8 text-center backdrop-blur-lg text-white flex-col px-8 justify-start pt-36 gap-6'>
      <motion.h1
        initial='hidden'
        animate='visible'
        variants={variants}
        className='font-header text-yellow text-5xl 2xl:text-6xl text-center'
      >
        Software Developer and Designer
      </motion.h1>
      {/* <p className="font-body text-white text-lg uppercase">
              Let&apos;s connect
            </p> */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        className='font-body leading-relaxed'
      >
        <h4 className='font-header font-medium text-xl  2xl:text-2xl '>
          {currentUser.bio
            ? currentUser.bio
            : "I'm Alex Magwe, a Full stack Developer, Embedded System engineer & Entreprenuer"}
        </h4>
        {/* <PortableText value={currentUser.about}/> */}
      </motion.div>
      <div className=''>
        <i className='bx bx-chevron-right text-yellow text-3xl'></i>
        <div className='flex items-center text-white gap-4 justify-center pt-5 sm:pt-0 pl-2'>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default Introduction
