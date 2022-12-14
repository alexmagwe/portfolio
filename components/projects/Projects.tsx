/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect } from 'react'
import Project from './Project'
import { useContext } from 'react'
import { DataContext } from '../../context'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {}

function Projects(props: Props) {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  const variant1 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  }
  const variant2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 3 } },
  }
  const variant3 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 3 } },
  }
  let { projects } = useContext(DataContext)
  return (
    <div ref={ref} className='container py-16 md:py-20' id='portfolio'>
      <motion.h2
        initial='hidden'
        animate='visible'
        variants={variant1}
        className='font-header font-semibold text-white text-3xl sm:text-4xl text-center'
      >
        Some of my Projects
      </motion.h2>
      <motion.h3
        initial='hidden'
        animate={controls}
        variants={variant2}
        className='font-header text-white/80 mx-auto w-1/2 font-medium text-2xl pt-6 text-center'
      >
        I've worked on alot of projects over the years but these ones are the
        ones that im most proud of, Many of them are open-source, so if you see
        something that piques your interest, check out the code and contribute
        if you have ideas for how it can be improved.
      </motion.h3>

      <motion.div
        initial='hidden'
        animate={controls}
        variants={variant3}
        className='w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 pt-16'
      >
        {projects &&
          projects.map((project, i) => (
            <div key={i}>{<Project project={project} />}</div>
          ))}
      </motion.div>
    </div>
  )
}

export default Projects
