import { Grid2 } from "@mui/material";
import { Comment } from "./Comment";

export default function Comments(){
    
    return(
        <Grid2 container direction='column' spacing='2em' sx={{
            padding: '0.5rem 1rem',
            backdropFilter: 'blur(10px)',
            scrollBehavior: 'auto',
            maxHeight: '10rem',
            overflowY: 'scroll',
            flexWrap: 'nowrap'
        }}>
            <Grid2>Comments</Grid2>
            <Grid2><Comment /></Grid2>
        </Grid2>
    )
}