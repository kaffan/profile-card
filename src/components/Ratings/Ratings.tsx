import Grid from "@mui/material/Grid2";

export default function Ratings() {
  return (
    <Grid container direction="column" rowSpacing='1rem' sx={{
        backdropFilter: 'blur(10px)',
    }}>
      <Grid>Ratings</Grid>
      <Grid>
        <Grid container columnSpacing='1rem' sx={{
            padding:'0 1rem'
        }}>
          <Grid fontSize='large' sx={{
            flexBasis: '20%'
          }}>57</Grid>
          <Grid sx={{
            flexBasis: '80%'
          }}>Has ethical code of conduct and is safe to do bussines with</Grid>
        </Grid>
      </Grid>
      <Grid>
        <Grid container columnSpacing='3' sx={{
            padding:'0 1rem'
        }}>
          <Grid fontSize='large' sx={{
            flexBasis: '20%'
          }}>27</Grid>
          <Grid sx={{
            flexBasis: '80%'
          }}>Met In real life/Video call</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
