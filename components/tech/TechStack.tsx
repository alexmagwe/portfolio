/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context";
import { useEffect } from "react";
import { useState } from "react";
import Technology from "./Technology";

type Props = {
  technology: any[];
};

function TechStack(props: Props) {
  let [projectStack, setProjectStack] = useState<any[]>();
  const { stack } = useContext(DataContext);
  let tech = props.technology;
  
  return (
    <div className="flex gap-2 mb-4 text-white">
      {tech ? (
        tech.map((l, i) => <Technology key={i} tech={l} />)
      ) : (
        <span className="text-2xl text-white">Loading...</span>
      )}
    </div>
  );
}

export default TechStack;
