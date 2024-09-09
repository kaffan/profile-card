import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Comment = () => {
  const arr = [0, 0, 0, 0];
  return (
    <>
      {arr.map((ele: any) => (
        <Grid
          container
          direction="row"
          spacing="2em"
          sx={{
            flexWrap: "nowrap",
            fontSize: "0.7rem",
            margin: '1rem 0'
          }}
        >
          <Grid>
            <Avatar src="/@/public/Images/dp.svg" />
          </Grid>
          <Grid direction="column" spacing="1em">
            <Grid>Gwen Stacy See you in the next event @roger vaccaro</Grid>
            <Grid container direction="row" spacing="1rem">
              <Grid>1s</Grid>
              <Grid>241 likes</Grid>
              <Grid>Reply</Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
