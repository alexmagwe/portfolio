/* eslint-disable @next/next/no-img-element */
import React,{useContext,useEffect,useState} from 'react'
import imageUrlBuilder from "@sanity/image-url";
import { EnvContext } from '../../context';
type Props = {
  tech:any
}

function Technology(props:Props) {
  const [imageUrl,setImageUrl]=useState<any>(null)
  const{projectId,dataset}=useContext(EnvContext)
  let {tech}=props
   useEffect(()=>{
    const imgBuilder = imageUrlBuilder({
      projectId,
      dataset,
    });
    const imageSrc=imgBuilder.image(tech.thumbnail)
    setImageUrl(imageSrc)
  },[dataset, tech.thumbnail, projectId])
  return (
     <p  className="flex gap-2 items-center p-2 shadow-sm justify-between rounded-md" >
                <span className='w-6 h-6'>
                  <img className=' rounded-lg w-full h-full' src={imageUrl} alt=""/>
                  </span>
                <span className='text-grey-60 text-sm '>{tech.name}</span>
            </p>
            )
}

export default Technology