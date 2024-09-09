'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import { ProfileData } from "./ProfileData";

export const Context : any = createContext([]);
export default function Provider(props: any){
    const [value, setValue] = useState([]);
    useEffect(()=>{
        ProfileData().then((data)=>{
            console.log(data);
            setValue(data)
        });
    }, [])
    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}
