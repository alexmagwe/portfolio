import React from "react";
import Stack from "./Languages/Stack";
import SocialLinks from "./SocialLinks";

type Props = {};

function AboutMe({}: Props) {
  return (
    <div className="bg-grey-50 " id="about">
      <div className="container py-16 md:py-4 flex flex-col lg:flex-row items-center">
        <div className="py-16 md:py-20  flex justify-center items-center flex-col lg:flex-row">
          <div className="w-full sm:w-3/4  text-center lg:text-left">
            <h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase">
              Who am I?
            </h2>
            <h4 className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6">
              I'm Alex Magwe, a Full stack Developer, Embedded System engineer &
              Entreprenuer
            </h4>
            <p className="font-body text-grey-20 pt-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start pt-6">
              <div className="flex justify-center sm:justify-start items-center">
                <p className="font-body font-semibold text-grey-20 text-lg uppercase">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-primary text-2xl"></i>
                </div>
              </div>
              <div className="flex items-center text-royal gap-4 justify-center sm:justify-start pt-5 sm:pt-0 pl-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
        <Stack />
      </div>
    </div>
  );
}

export default AboutMe;
