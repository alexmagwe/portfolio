import React from "react";
import Language from "./Language";

type Props = {};

function Stack({}: Props) {
  return (
    <div className="w-full sm:w-3/4 flex flex-col items-center justify-center">
      <Language name={"Python"} percentage={80} />
      <Language name={"Python"} percentage={90} />
      <Language name={"Python"} percentage={60} />
    </div>
  );
}

export default Stack;
