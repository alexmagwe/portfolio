import { createContext } from "react";
type EnvType = {
  projectId: string ;
  dataset: string ;
};
type User={
  name:string
  bio:string
  socials:any[]
  profilePicture:object
  about:any

}
type DataType={
  skills:any[]
  projects:any[]
  stack:any[]
  user:User[]
}
export const EnvContext = createContext<EnvType>({projectId:"",dataset:""});
export const DataContext=createContext<DataType>({skills:[],projects:[],stack:[],user:[]})
