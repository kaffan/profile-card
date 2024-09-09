'use client'
import { createContext, useEffect, useState } from "react";
import { ProfileData } from "./ProfileData";
import { profileData } from "@/types/index.types";

export const Context : any = createContext([]);
export default function Provider(props: any){
    let [value, setValue] = useState([]);
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
