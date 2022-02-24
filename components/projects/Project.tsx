/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react'
import Links, { LinksType } from './Links'
import Technology, { Tech } from './Technology'
import imageUrlBuilder from "@sanity/image-url";
import { useContext } from 'react';
import { EnvContext } from '../../context';
// import BlockContent from "@sanity/block-content-to-react";
type Props={
  project:ProjectType
}
export type ProjectType = {
    name:string
    description:string
    technology:Tech[]
    mainImage:object
    webLink:string
    githubLink:string
}

function Project(props: Props) {
  const [imageUrl,setImageUrl]=useState<any>(null)
  const{projectId,dataset}=useContext(EnvContext)
  const {project}=props
  useEffect(()=>{
    const imgBuilder = imageUrlBuilder({
      projectId,
      dataset,
    });
    const imageSrc=imgBuilder.image(project.mainImage)
    setImageUrl(imageSrc)
  },[dataset, project.mainImage, projectId])
  return (
    <div className='flex flex-col w-full   overflow-hidden shadow-md  bg-primary rounded-md relative justify-start'>
         <a href={project.webLink?project.webLink:project.githubLink}
           className="mx-auto md:mx-0 " target={"_blank"} rel={"noreferrer"}>
            <img src={imageUrl}
                 className="shadow w-full s z-1 top-0 transition-all duration-300 transform  hover:scale-110 right-0"
                 alt=""/>
        
        </a>
        <Links githubLink={project.githubLink} webLink={project.webLink}/>
        {/* <p className='text-white text-lg p-8'>
          <BlockContent blocks={project.description}/>
          
        </p> */}
        <Technology technology={project.technology} />
    </div>
  )
}

export default Project