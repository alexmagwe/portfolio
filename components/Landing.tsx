/* eslint-disable @next/next/no-img-element */
import React from "react";
import Introduction from "./Introduction";
import { motion } from "framer-motion";
type Props = {};

function Landing({}: Props) {
  return (
    <motion.div>
      <div className="z-30 relative w-full h-screen">
        <div className="h-full">
          <Introduction />
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;
