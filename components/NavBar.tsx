import React from "react";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className='flex relative items-center p-2 justify-center'>
      <ul className="flex mt-8 gap-4">
        <li className="py-2">
          <span className="font-header font-semibold text-white uppercase pt-0.5 cursor-pointer">
            Resume
          </span>
        </li>

        <li className="py-2">
          <span className="font-header font-semibold text-white uppercase pt-0.5 cursor-pointer">
            Blog
          </span>
        </li>

        <li className="py-2">
          <span className="font-header font-semibold text-white uppercase pt-0.5 cursor-pointer">
            Projects
          </span>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
