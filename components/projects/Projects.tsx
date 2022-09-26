/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Project from "./Project";
import { useContext } from "react";
import { DataContext } from "../../context";

type Props = {};

function Projects(props: Props) {
  let { projects } = useContext(DataContext);
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="font-header font-semibold text-white text-3xl sm:text-4xl text-center">
        Some of my Projects
      </h2>
      <h3 className="font-header mx-auto w-1/2 font-medium text-2xl pt-6 text-center">
        I've worked on alot of projects over the years but these ones are the
        ones that im most proud of, Many of them are open-source, so if you see
        something that piques your interest, check out the code and contribute
        if you have ideas for how it can be improved.
      </h3>

      <div className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 pt-16">
        {projects &&
          projects.map((project, i) => (
            <div key={i}>{<Project project={project} />}</div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
