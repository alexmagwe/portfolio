/* eslint-disable @next/next/no-img-element */
import React from "react";
import profileImage from "../assets/img/profileImage.jpg";
import SocialLinks from "./Socials/SocialLinks";
import { useContext } from 'react';
import { DataContext, EnvContext } from "../context";
import { useImageBuilder } from "../hooks";
import { useEffect } from 'react';
type Props = {};

function Introduction({}: Props) {
  const {user}=useContext(DataContext)
  const{projectId,dataset}=useContext(EnvContext)

  const currentUser=user && user[0]
  const image=useImageBuilder(projectId,dataset,currentUser.profilePicture)
  return (
    <div className="flex flex-col lg:flex-row py-24 justify-center 2xl:mb-12 lg:py-48  items-center ">
      <div className="rounded-full border-8 border-primary shadow-xl">
        <img
          src={image?image:profileImage}
          className="sm:h-56 w-56 object-cover rounded-full"
          alt=":>)"
        />
      </div>
      <div className="lg:pl-8 pt-8 sm:pt-10 lg:pt-0">
        <h1 className="font-header text-white text-4xl sm:text-5xl md:text-6xl text-center sm:text-left">
          Hello I&apos;m {currentUser.name}!
        </h1>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start pt-3 sm:pt-5">
          <div className="flex justify-center sm:justify-start items-center pl-0 md:pl-1">
            <p className="font-body text-white text-lg uppercase">
              Let&apos;s connect
            </p>
            <div className="hidden sm:block">
              <i className="bx bx-chevron-right text-yellow text-3xl"></i>
              <div className="flex items-center text-white gap-4 justify-center sm:justify-start pt-5 sm:pt-0 pl-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
