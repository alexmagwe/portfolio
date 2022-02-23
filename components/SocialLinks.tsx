import React from "react";
import {
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaAngleRight,
} from "react-icons/fa";

type Props = {};

function SocialLinks({}: Props) {
  return (
    <>
      <FaAngleRight size="30px" />
      <a
        href="https://twitter.com/alexmagwe"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <FaTwitterSquare className="hover:text-yellow transition" size="40px" />
      </a>
      <a
        href="https://www.linkedin.com/in/alex-magwe-656a92197"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <FaLinkedin className="hover:text-yellow transition" size="40px" />
      </a>
      <a
        href="https://www.instagram.com/alex.kepla/"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <FaInstagramSquare
          className="hover:text-yellow transition"
          size="40px"
        />
      </a>
    </>
  );
}

export default SocialLinks;
