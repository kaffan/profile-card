import { Context } from "@/app/Provider";
import { profileData } from "@/types/index.types";
import Grid2 from "@mui/material/Grid2";
import Image from "next/image";
import { useContext } from "react";
import { RWebShare } from "react-web-share";

export const Share = () => {
  const value: profileData[] = useContext(Context);
  return (
    <Grid2
      direction="column"
      sx={{
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid2
        sx={{
          width: "fit-content",
        }}
      >
        <RWebShare
          data={{
            text: "Deepa Raj's profile card",
            url: value[0]?.shareProfileURL,
            title: value[0]?.title[0]?.value,
          }}
        >
          <Image
            alt="share"
            src="/@/public/Images/dp.svg"
            width="36"
            height="36"
          />
        </RWebShare>
      </Grid2>
      <Grid2
        sx={{
          width: "fit-content",
        }}
      >
        Share
      </Grid2>
    </Grid2>
  );
};
