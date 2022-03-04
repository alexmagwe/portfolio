import React from "react";
import Language from "./Language";
type Props = {
  data: object[];
  title: string;
};
function WebSkills({ data,title }: Props) {
  return (
    <div className="rounded-xl text-white bg-primary lg:px-12 md:px-4 px-8 py-8 ">
      <h3 className="font-header  text-2xl mb-8 font-bold text-grey-50 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 gap-2 sm:gap-4 p-4 w-full">
        {data &&
          data.map((stack: any, i: number) => (
            <Language key={i} name={stack.name} skillLevel={stack.skillLevel} />
          ))}
      </div>
    </div>
  );
}
export default WebSkills