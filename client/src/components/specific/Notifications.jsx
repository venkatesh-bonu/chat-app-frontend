import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../../ constants/sampleData";

const Notifications = () => {
  const friendReqHandler = ({ _id, accept }) => {
    console.log(id);
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notification</DialogTitle>
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((i) => (
            <NotificationItem
              sender={i.sender}
              key={i._id}
              id={i._id}
              handler={friendReqHandler}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const {name,avatar} = sender
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar/>
        <Typography
          type={"body1"}
          sx={{
            flexGrow: 1,
          }}
        >
          {`${name}`}
        </Typography>
        <Stack direction={{
          xs : "column",
          sm : "row"
        }}>
          <Button onClick = {() => handler(_id,accept = true)} >Accept</Button>
          <Button color ="error" onClick = {() => handler(_id,accept = false)} >Reject</Button>
        </Stack>
      </Stack>
    </ListItem> 
  );
});

export default Notifications;
