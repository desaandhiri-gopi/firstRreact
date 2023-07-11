import { useState } from "react"

export default function Clk(){
    const[name,setname]=useState('0')
    const a=()=>
    setname=((name+1))
    return(
        <div>
            <h2>{name}</h2>
            <button onClick={a}>Click</button>
        </div>
    )
}