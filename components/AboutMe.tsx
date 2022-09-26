import React, { useContext } from "react";
import SocialLinks from "./Socials/SocialLinks";
import { DataContext } from "../context";
import {PortableText} from '@portabletext/react'
import { BsArrowRight } from "react-icons/bs";

type Props = {};

function AboutMe({}: Props) {
  const {user}=useContext(DataContext)
  const currentUser=user[0]
  return (
    <div className="" id="about">
      <div className="container md:py-4 flex flex-col lg:flex-row items-center">
        <div className="py-16 md:py-20  flex justify-center items-center flex-col lg:flex-row">
          <div className="w-full sm:w-3/4  text-center lg:text-left">
            <h4 className="font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6">
            {currentUser.bio?currentUser.bio:"I'm Alex Magwe, a Full stack Developer, Embedded System engineer & Entreprenuer"}
            </h4>
            <p className="font-body pt-6 leading-relaxed">
             <PortableText value={currentUser.about}/>
            </p>
            {/* <div className="flex flex-col sm:flex-row justify-center lg:justify-start pt-6">
              <div className="flex justify-center sm:justify-start items-center">
                <p className="font-body font-semibold mx-2 text-grey-10 text-lg uppercase">
                  Connect with me
                </p>
               <BsArrowRight/>
              </div>
              <div className="flex items-center text-royal gap-4 justify-center sm:justify-start pt-5 sm:pt-0 pl-2">
                <SocialLinks />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
