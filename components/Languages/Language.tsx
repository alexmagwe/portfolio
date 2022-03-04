import React from "react";
import {BsPatchCheckFill} from 'react-icons/bs'
type Props = {
  name: string;
  skillLevel: number;
};

function Language(props: Props) {
  return (
      <div className="flex gap-2 ">
        <span className="w-12 text-sky mt-2">
    <BsPatchCheckFill/>
        </span>
        <p className="flex flex-col justify-start gap-2">
        <span className="font-body font-semibold  uppercase text-xl lg:text-2xl">
          {props.name}
        </span>
        <span className="font-body text-grey-6 0  lg:text-xl text-lg">
          {props.skillLevel}
        </span>
        </p>
      </div>
    
  );
}

export default Language;
