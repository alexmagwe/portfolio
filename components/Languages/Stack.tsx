import WebSkills from "./WebSkills";
import React, { useEffect, useContext, useState } from "react";
import Language from "./Language";
import { DataContext, EnvContext } from "../../context";

type Props = {};

function Stack({}: Props) {
  const [loading, setLoading] = useState(true);
  let [frontEnd, setFrontEnd] = useState<any[]>([]);
  let [backEnd, setBackEnd] = useState<any[]>([]);
  const { stack } = useContext(DataContext);

  //  const query = encodeURIComponent(`*`)
  useEffect(() => {
    if (stack && stack.length > 0) {
      console.log("stack:", stack[0]);

      let fe = stack.filter((s) => s.category.title == "frontend");
      let be = stack.filter((s) => s.category.title == "backend");
      if (fe) {
        setFrontEnd(fe);
        console.log("fe:", fe);
      }
      if (be) {
        setBackEnd(be);
        console.log("be:", be);
      }

      setLoading(false);
    }
  }, [stack]);

  return (
    <div className="w-full  mx-auto flex flex-col p-8 items-center justify-center">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2 className="font-header font-semibold  text-primary text-4xl mt-4 mb-8 sm:text-5xl lg:text-6xl uppercase text-center">
            Here's what I'm good at
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-evenly w-full">
            <WebSkills data={frontEnd} title={"Frontend"} />
            <WebSkills data={backEnd} title={"Backend"} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Stack;
