import React from "react";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../ constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/profile";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams()
    const chatId = params.chatId

    const handleDeleteChat = (event,_id,groupChat) => {
      event.preventDefault();
      console.log("delte chat",_id,groupChat)
    }

    return <>
      <Title title="Chat App" />
      <Header />
      <Grid container style={{ height: "calc(100vh - 4rem)" }}>
        <Grid
          item
          xs={0}
          sm={4}
          md={3}
          lg={3}
          sx={{ display: { xs: "none", sm: "block" } }}
          height={"100%"}
        >
          <ChatList
            chats={sampleChats}
            chatId={chatId}
            newMessagesAlert={[{ chatId: "1", count: 0 },{chatId:"2",count:2}]}
            onlineUsers={["1", "2"]}
            handleDeleteChat={handleDeleteChat}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
          <WrappedComponent {...props} />
        </Grid>
        <Grid
          item
          md={4}
          lg={3}
          sx={{
            display: { xs: "none", md: "block" },
            bgcolor: "rgba(0,0,0,0.85)",
            color: "white",
          }}
          height={"100%"}
        >
         <Profile />
        </Grid>
      </Grid>
    </>;
  };
};

export default AppLayout;
