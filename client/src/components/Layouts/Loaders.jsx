import React from "react";
import Title from "../shared/Title";
import { Grid, Skeleton, Stack } from "@mui/material";
import Header from "./Header";

export const LayoutLoader = () => {
  return (
    <Grid container style={{ height: "calc(100vh - 4rem)" }} spacing={"1rem"}>
      <Grid
        item
        xs={0}
        sm={4}
        md={3}
        lg={3}
        sx={{ display: { xs: "none", sm: "block" } }}
        height={"100%"}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        <Stack spacing={"1rem"}>
          {Array.from({ length: 14 }).map((eachItem, _index) => (
            <Skeleton key = {_index} variant="rounded" height={"5rem"} />
          ))}
        </Stack>
      </Grid>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
        }}
        height={"100%"}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};
