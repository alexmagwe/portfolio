import { createContext } from "react";
type EnvType = {
  projectId: string ;
  dataset: string ;
};
export const EnvContext = createContext<EnvType>({projectId:"",dataset:""});
