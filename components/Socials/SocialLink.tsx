/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import { EnvContext } from '../../context'
import { useImageBuilder } from '../../hooks'

type Props = {
    link:string
    icon:object
    name:string
}

function SocialLink(props: Props) {
     const{projectId,dataset}=useContext(EnvContext)
  const image=useImageBuilder(projectId,dataset,props.icon)

  return (
    <div>
         <a
        href={props.link}
        target={"_blank"}
        rel={"noreferrer"}
      >
          <img className='h-12 w-12 hover:scale-105' src={image?image:""} alt={props.name}></img>
      </a>
    </div>
  )
}

export default SocialLink