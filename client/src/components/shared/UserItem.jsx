import { Stack, Avatar, IconButton, ListItem, Typography } from "@mui/material";
import React, { memo } from "react";
import { Add as AddIcon,Remove as RemoveIcon } from "@mui/icons-material";
const UserItem = ({ user, handler, handlerIsLoading,isAdded = false,styling = {} }) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
        {...styling}
      >
        <Avatar />
        <Typography
          type={"body1"}
          sx={{
            flexGrow: 1,
          }}
        >
          {name}
        </Typography>
        <IconButton
          size={"small"}
          sx={{
            bgcolor: isAdded ? "error.main" :  "primary.main",
            color: "white",
            "&:hover": { bgcolor: isAdded ? "error.dark" : "primary.dark" },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          { isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
