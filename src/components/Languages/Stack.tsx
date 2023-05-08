import WebSkills from "./WebSkills";
import React, { useEffect, useContext, useState } from "react";
import Language from "./Language";
import { DataContext, EnvContext } from "../../context";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

function Stack({}: Props) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };
  const [loading, setLoading] = useState(true);
  let [frontEnd, setFrontEnd] = useState<any[]>([]);
  let [backEnd, setBackEnd] = useState<any[]>([]);
  const { stack } = useContext(DataContext);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  //  const query = encodeURIComponent(`*`)
  useEffect(() => {
    if (stack && stack.length > 0) {
      // console.log("stack:", stack[0]);

      let fe = stack.filter((s) => s.category.title == "frontend");
      let be = stack.filter((s) => s.category.title == "backend");
      if (fe) {
        setFrontEnd(fe);
        // console.log("fe:", fe);
      }
      if (be) {
        setBackEnd(be);
        // console.log("be:", be);
      }

      setLoading(false);
    }
  }, [stack]);

  return (
    <div className="w-full mx-auto flex flex-col p-8 items-center justify-center">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <motion.div
          initial="hidden"
          animate={controls}
          ref={ref}
          variants={variants}
        >
          <h2 className="font-header font-semibold text-white text-4xl mt-4 mb-12 sm:text-3xl lg:text-4xl  text-center">
            Here&apos;s some of the jargon I&apos;ve learned over the years
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-evenly w-full">
            <WebSkills data={frontEnd} title={"Frontend"} />
            <WebSkills data={backEnd} title={"Backend"} />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Stack;
