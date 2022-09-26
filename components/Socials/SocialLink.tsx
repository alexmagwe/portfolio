/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { EnvContext } from "../../context";
import { useImageBuilder } from "../../hooks";
import { motion } from "framer-motion";

type Props = {
  link: string;
  icon: object;
  name: string;
};

function SocialLink(props: Props) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };
  const { projectId, dataset } = useContext(EnvContext);
  const image = useImageBuilder(projectId, dataset, props.icon);

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <a href={props.link} target={"_blank"} rel={"noreferrer"}>
        <img
          className="w-[40px] hover:scale-105"
          src={image ? image : ""}
          alt={props.name}
        ></img>
      </a>
    </motion.div>
  );
}

export default SocialLink;
