
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
// export const getServerSideProps = async () => {
//   //  const query = encodeURIComponent(`*`)
//   const projectId = process.env.PROJECT_ID
//   const dataset = process.env.PROJECT_DATASET

//   const projectQuery = encodeURIComponent(
//     `*[_type=="project"]{...,technology[]->}`
//   )
//   const projectUrl = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${projectQuery}`
//   const projectResp = await fetch(projectUrl).then((res) => res.json())

//   const userQuery = encodeURIComponent(
//     `*[_type=="user"]{name,bio,about,profilePicture,socials[]->}`
//   )
//   const usersUrl = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${userQuery}`
//   const userResp = await fetch(usersUrl).then((res) => res.json())

//   const stackQuery = encodeURIComponent(
//     `*[_type=="stack"]{...,category->{title}}`
//   )
//   const stackUrl = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${stackQuery}`
//   const stackResp = await fetch(stackUrl).then((res) => res.json())
//   return {
//     props: {
//       projects: projectResp.result,
//       stack: stackResp.result,
//       user: userResp.result,
//       projectId,
//       dataset,
//     },
//   }
// }
