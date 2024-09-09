'use client'
import Grid from '@mui/material/Grid2'
import { useContext } from 'react';
import { Context } from './Provider';
import { profileData } from '@/types/index.types';
import DPCard from '@/components/DPCard/DPCard';
import { Share } from '@/components/Share/Share';
import Ratings from '@/components/Ratings/Ratings';
import Comments from '@/components/Comments/Comments';

export default function ProfileCard(){
  const context : profileData[] = useContext(Context);
  return(
    <Grid container direction='column' rowGap='1rem' sx={{
      maxWidth: '375px',
      padding: '7px 14px',
      backgroundImage: `url(${context?.at(0)?.profileDesignInfo.profileBannerImageURL})`,
      margin: 'auto'
    }}>
      <Grid><DPCard /></Grid>
      <Grid><Share /></Grid>
      <Grid><Ratings /></Grid>
      <Grid><Comments /></Grid>
    </Grid>
  );
};