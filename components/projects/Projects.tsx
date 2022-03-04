/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Project from "./Project";
import { useContext } from 'react';
import { DataContext } from "../../context";

type Props ={ 
};

function Projects(props: Props) {
  let {projects}=useContext(DataContext)
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
        Check out my Portfolio
      </h2>
      <h3 className="font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
        Here's what I have done with the past
      </h3>

      <div className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 pt-12">
        {projects && projects.map((project,i) => (
          <div key={i}>
          {<Project  project={project} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
