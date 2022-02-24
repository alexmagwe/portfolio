/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { EnvContext } from "../../context";
import imageUrlBuilder from "@sanity/image-url";

// type Props = {
//   skill: {
//     icon: object;
//     name: string;
//     description: string;
//   };
// };

function Skill(props:any) {
  const [iconUrl, setIconUrl] = useState<any>(null);
  const { projectId, dataset } = useContext(EnvContext);
  const { skill } = props;

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId,
      dataset,
    });
    const imageSrc = imgBuilder.image(skill.icon);
    console.log("image url:",imageSrc)
    setIconUrl(imageSrc);
  }, [dataset, skill.icon, projectId]);
  return (
    <div className="shadow px-8 py-12 hover:shadow-lg group rounded">
      <div className="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
        <div className=" ">
          <img
            src={iconUrl?iconUrl:null}
            alt="content marketing icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-semibold  text-lg lg:text-xl text-primary uppercase pt-8">
          {skill.name}
        </h3>
        <p className="text-sm md:text-base text-grey pt-4 ">
          {skill.description}
        </p>
      </div>
    </div>
  );
}

export default Skill;
