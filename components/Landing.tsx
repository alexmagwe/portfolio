/* eslint-disable @next/next/no-img-element */
import React from "react";
import Introduction from "./Introduction";

type Props = {};

function Landing({}: Props) {
  return (
    <div>
      <div className="z-30 relative w-full">
        <Introduction />
      </div>
    </div>
  );
}

export default Landing;
