import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
export type LinksType={
  webLink:string | null
  githubLink:string
}

function Links(props: LinksType) {
  return (
      <div className="flex gap-4 w-4/5 my-4 relative text-white items-center">
        {props.githubLink && (
          <a target={"_blank"} className={'p-2 text-lg flex hover:bg-primar border-2 border-zinc-400  rounded-md transition justify-center'} href={props.githubLink} rel="noreferrer">
              Github
          </a>
        )}
        {props.webLink && (
          <a  href={props.webLink} target={"_blank"} className="p-2  text-lg hover:bg-primary  bg-secondary border-2 rounded-md border-zinc-400 transition flex justify-center" rel="noreferrer">
             Live Demo
          </a>
        )}
      </div>
  );
}

export default Links;
