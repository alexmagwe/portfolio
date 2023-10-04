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
            className="font-header text-yellow/80 text-5xl "
        >
            Alex Magwe
        </motion.h1>
    )
}
