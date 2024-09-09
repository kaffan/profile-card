'use client'
import { Context } from "@/app/Provider";
import { profileData } from "@/types/index.types";
import { Avatar, Grid2 } from "@mui/material";
import { useContext } from "react";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function DPCard(){
    const value : profileData[] = useContext(Context);
    return(
        <Grid2 container direction='column' rowSpacing='1rem'>
            <Grid2>
                <Grid2 container direction='column'>
                    <Grid2><Avatar src={value?.at(0)?.dpURL}/></Grid2>
                    <Grid2 container direction='column'>
                        <Grid2>{value?.at(0)?.firstname} {value.at(0)?.lastname}</Grid2>
                        <Grid2><BusinessCenterIcon /> {value?.[0]?.title[0].value}</Grid2>
                        <Grid2><LocationOnIcon /> {value.at(0)?.address.city} {value.at(0)?.address.country}</Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2>
                <Grid2>
                    <iframe></iframe>
                </Grid2>
            </Grid2>
        </Grid2>
    )
};