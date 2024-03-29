/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { env } from '@/lib/env'
import Image from 'next/image'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

type Props = {
    link: string
    icon: object
    name: string
}

function SocialLink(props: Props) {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    }
    let icon
    switch (props.name) {
        case 'Twitter':
            icon = <BsTwitter size={25} />
            break
        case 'Github':
            icon = <BsGithub size={25} />
            break
        case 'Linkedin':
            icon = <BsLinkedin size={25} />
            break
        default:
            break
    }

    return (
        <motion.div initial="hidden" animate="visible" variants={variants}>
            <a
                className="hover:scale-105 hover:text-yellow block"
                href={props.link}
                target={'_blank'}
                rel={'noreferrer'}
            >
                {icon}
            </a>
        </motion.div>
    )
}

export default SocialLink
