import React, { useContext } from "react";
import {
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaAngleRight,
} from "react-icons/fa";
import { DataContext } from "../../context";
import SocialLink from "./SocialLink";

type Props = {};

function SocialLinks({}: Props) {
  const { user } = useContext(DataContext);
  const { socials } = user&& user[0];

  return (
    <>
      {socials &&
        socials.map((social, i) => (
          <SocialLink
            key={i}
            link={social.link}
            name={social.name}
            icon={social.icon}
          />
        ))}
    </>
  );
}

export default SocialLinks;
