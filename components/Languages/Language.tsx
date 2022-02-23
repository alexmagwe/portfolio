import React from "react";
type Props = {
  name: string;
  percentage: number;
};

function Language(props: Props) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-end">
        <h4 className="font-body font-semibold text-black uppercase">
          {props.name}
        </h4>
        <h3 className="font-body font-bold text-primary text-3xl">
          {props.percentage}%
        </h3>
      </div>
      <div className="h-3 w-full rounded-full bg-lila mt-2">
        <div
          className="h-3 rounded-full bg-primary"
          style={{ width: `${props.percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Language;
