/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react'
import Links, { LinksType } from './Links'
import imageUrlBuilder from "@sanity/image-url";
import { useContext } from 'react';
import { EnvContext } from '../../context';
import BlockContent from "@sanity/block-content-to-react";
import TechStack from '../tech/TechStack';
import { useImageBuilder } from '../../hooks';

type Props={
  project:ProjectType
}
export type ProjectType = {
    title:string
    description:string
    technology:any[]
    mainImage:object
    webLink:string
    githubLink:string
}

function Project({project}: Props) {
  const{projectId,dataset}=useContext(EnvContext)
  const image=useImageBuilder(projectId,dataset,project.mainImage)
  

  return (
    <div className='flex flex-col w-full p-6 text-white overflow-hidden shadow-md  bg-primary rounded-2xl relative justify-start'>
         <a href={project.webLink?project.webLink:project.githubLink}
           className="mx-auto md:mx-0 " target={"_blank"} rel={"noreferrer"}>
            <img src={image}
                 className="shadow w-full z-1 top-0 transition-all duration-300 transform  rounded-3xl  right-0"
                 alt=""/>
        
        </a>
        <span className='text-2xl font-body my-2 py-2'>
        <BlockContent blocks={project.description}/>
          </span>
        <TechStack technology={project.technology} />
        <Links githubLink={project.githubLink} webLink={project.webLink}/>
        {/* <p className='text-white text-lg p-8'>
          
        </p> */}
    </div>
  )
}

export default Project