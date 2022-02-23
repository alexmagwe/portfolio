/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    icon:string
    name:string
    description:string
}

function Skill(props: Props) {
  return (
       <div className="shadow px-8 py-12 hover:bg-primary group rounded">
            <div className="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                <div className="hidden group-hover:block">
                    <img src="/assets/img/icon-content-white.svg"
                         alt="content marketing icon"/>
                </div>
                <div className="block group-hover:hidden">
                    <img src="/assets/img/icon-content-black.svg"
                         alt="content marketing icon"/>
                </div>
            </div>
            <div className="text-center">
                <h3
                    className="font-semibold  text-lg lg:text-xl text-primary uppercase pt-8 group-hover:text-yellow">
                    {props.name}</h3>
                <p
                   className="text-sm md:text-base text-grey pt-4 group-hover:text-white">
                {props.description}
                </p>
            </div>
        </div>
  )
}

export default Skill