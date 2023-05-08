/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Skill from './Skill'
import { env } from '@/lib/env'
import { getSkills } from '@/lib/getSkills'

type Props = {}

async function Skills(props: Props) {
    const skills = await getSkills()

    return (
        <div className="container py-16 md:py-20" id="services">
            <h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl uppercase text-center">
                Here's what I'm good at
            </h2>
            <h3 className="font-header font-medium text-white/80 text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
                Some jargon i have learned over the years
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
                {skills &&
                    skills.length > 0 &&
                    skills.map((skill, i: number) => (
                        <div key={i}>
                            <Skill skill={skill} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Skills
