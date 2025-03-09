import React, { useRef } from "react";
import AppLayout from "../components/Layouts/AppLayout";
import { gray } from "../ constants/colors";
import { IconButton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../styledComponents";
import { orange } from "../ constants/colors";
import FileMenu from "../dialog/FileMenu";
import { sampleMessage } from "../ constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

// import AppLayout from '../components/Layouts/AppLayout'
// import { ChatBubbleOutlineOutlined } from '@mui/icons-material'

const user = {
  _id : "dsafoidjg",
  name : "venkatesh"
}

const Chat = () => {
  const containerRef = useRef(null);
  const fileMenuRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        sx={{
          boxSizing: "broder-box",
          padding: "1rem",
          spacing: "1rem",
          backgroundColor: gray,
          height: "90%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessage.map(i => (
            <MessageComponent key = {i._id} user = {user} message={i} />
          ))
        }
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              rotate: "30deg",
              left: "1.5rem",
            }}
            ref={fileMenuRef}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Message Here..." />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: orange,
              color: "white",
              padding: "0.5rem",
              marginLeft: "0.5rem",
              "&:hover": {
                backgroundColor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
