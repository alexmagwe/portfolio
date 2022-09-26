import React from "react";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className='flex relative justify-center bg-transparent items-center p-2 py-6 '>
      <ul className="flex gap-4">
        <li className="py-2">
          <span className="font-header font-semibold text-white uppercase pt-0.5 cursor-pointer">
            Resume
          </span>
        </li>

        <li className="py-2">
          <a href="https://keplogs.vercel.app/" target={"_blank"} rel={"noreferrer"} className="font-header font-semibold text-white uppercase pt-0.5 cursor-pointer">
            Blog
          </a>
        </li>

        <li className="py-2">
          <a href="#projects" className="font-header font-semibold text-white uppercase pt-0.5 cursor-pointer">
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
