import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
export type LinksType={
  webLink:string | null
  githubLink:string
}

function Links(props: LinksType) {
  return (
      <div className="flex gap-4 w-full relative text-white  bg-secondary justify-evenly items-center">
        {props.webLink && (
          <a  href={props.webLink} target={"_blank"} className="p-4 w-1/2 hover:bg-primary transition flex justify-center" rel="noreferrer">
              <FaExternalLinkAlt />
          </a>
        )}
        {props.githubLink && (
          <a target={"_blank"} className={'p-4  w-1/2 flex hover:bg-primary transition justify-center'} href={props.githubLink} rel="noreferrer">
              <FaGithub />
          </a>
        )}
      </div>
  );
}

export default Links;
