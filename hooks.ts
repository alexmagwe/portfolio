
import { useEffect, useState } from 'react';
import imageUrlBuilder  from '@sanity/image-url';
export const useImageBuilder=(projectId:string,dataset:string,image:object)=>{
  const [imageUrl,setImageUrl]=useState<any>(null)
  useEffect(()=>{
    const imgBuilder = imageUrlBuilder({
      projectId,
      dataset,
    });
    const imageSrc=imgBuilder.image(image)
    setImageUrl(imageSrc)
  },[dataset, image, projectId])
return imageUrl
}