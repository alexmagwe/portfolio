/* eslint-disable @next/next/no-img-element */
import React from 'react'
export type Tech={
    name:string
    thumbnail:string
}
type Props = {
    technology:Tech[]
}

function Technology(props: Props) {
  return (
    <div>
        {props.technology.map(tech=>{
            <p>
                <span><img src={tech.thumbnail} alt=""/></span>
                <span>{tech.name}</span>
            </p>
        })}
    </div>
  )
}

export default Technology