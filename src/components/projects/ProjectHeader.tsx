'use client'
import React, { useEffect } from 'react'

type Props = {}
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ProjectHeader({}: Props) {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])
    const variant1 = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    }
    const variant2 = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 3 } },
    }
    return (
        <div className="mb-4" ref={ref}>
            <motion.h2
                initial="hidden"
                animate="visible"
                variants={variant1}
                className="font-header font-semibold  text-2xl sm:text-4xl"
            >
                Some of my Projects
            </motion.h2>
            <motion.h3
                initial="hidden"
                animate={controls}
                variants={variant2}
                className="font-header py-2 mb-4"
            >
                these are some personal projects and some contract work that i
                can public disclose
            </motion.h3>
        </div>
    )
}
