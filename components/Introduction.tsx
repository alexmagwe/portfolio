/* eslint-disable @next/next/no-img-element */
import React from "react";
import profileImage from "../assets/img/profileImage.jpg";
import SocialLinks from "./Socials/SocialLinks";
import { useContext } from 'react';
import { DataContext, EnvContext } from "../context";
import { useImageBuilder } from "../hooks";
import { useEffect } from 'react';
import AboutMe from "./AboutMe";
import {PortableText} from '@portabletext/react'

type Props = {};

function Introduction({}: Props) {
  const {user}=useContext(DataContext)
  const{projectId,dataset}=useContext(EnvContext)

  const currentUser=user && user[0]
  const image=useImageBuilder(projectId,dataset,currentUser.profilePicture)
  return (

    <div className="flex flex-col px-8 justify-start md:ml-64 2xl:ml-84 pt-36 gap-6 xl:w-1/3 md:w-1/2">
        <h1 className="font-header text-white text-5xl md:text-6xl sm:text-left">
          Software developer and Designer
        </h1>
            {/* <p className="font-body text-white text-lg uppercase">
              Let&apos;s connect
            </p> */}
             <p className="font-body leading-relaxed">
               <h4 className="font-header font-medium text-xl sm:text-2xl ">
            {currentUser.bio?currentUser.bio:"I'm Alex Magwe, a Full stack Developer, Embedded System engineer & Entreprenuer"}
            </h4>
             {/* <PortableText value={currentUser.about}/> */}
            </p>
            <div className="">
              <i className="bx bx-chevron-right text-yellow text-3xl"></i>
              <div className="flex items-center text-white gap-4 justify-start sm:justify-start pt-5 sm:pt-0 pl-2">
                <SocialLinks />
              </div>
      </div>
    </div>
  );
}

export default Introduction;
