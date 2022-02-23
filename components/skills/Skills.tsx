/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
 <div className="container py-16 md:py-20"id="services">
    <h2
        className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
        Here's what I'm good at</h2>
    <h3
        className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
        These are the services Ioffer</h3>

    <div
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
        <Skill name={"UI design"} description={"Designing user interfaces using modern tools"} icon={"image"}/>
    </div>
</div>
  )
}

export default Skills