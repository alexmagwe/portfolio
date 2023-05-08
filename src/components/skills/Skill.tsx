/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Skill } from '@/lib/getSkills'
type Props = {
    skill: Skill
}

function Skill({ skill }: Props) {
    const imageUrl = skill.thumbnail
        ? (urlFor(skill.thumbnail).url() as string)
        : null

    return (
        <div className="shadow px-8 py-12 hover:shadow-lg group rounded">
            <div className="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                <div className=" ">
                    {imageUrl ? (
                        <Image
                            width={50}
                            height={50}
                            src={imageUrl}
                            alt="content marketing icon"
                        />
                    ) : null}
                </div>
            </div>
            <div className="text-center">
                <h3 className="font-semibold  text-lg lg:text-xl text-primary uppercase pt-8">
                    {skill.name}
                </h3>
                <p className="text-sm md:text-base text-grey pt-4 ">
                    {skill.skillLevel}
                </p>
            </div>
        </div>
    )
}

export default Skill
