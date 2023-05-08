'use client'
import React from 'react'
import { motion } from 'framer-motion'

export function Title({}) {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    }
    return (
        <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            className="font-header text-yellow/80 text-5xl 2xl:text-6xl text-center"
        >
            Software Developer and Designer
        </motion.h1>
    )
}
