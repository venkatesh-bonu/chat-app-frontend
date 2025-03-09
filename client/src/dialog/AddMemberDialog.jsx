import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import UserItem from "../components/shared/UserItem";
import { sampleUsers } from "../ constants/sampleData";
const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const addFriendHandler = () => {
    addMember(id, chatId);
  };

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemeberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addMemeberSubmitHandler = () => {
    closeHandler()
  };
  const closeHandler = () => {
    setMembers([]);
    setSelectedMembers([]);
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"} flexGrow={1}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        {members.length > 0 ? (
          <Stack spacing={"1rem"}>
            {members.map((i) => (
              <UserItem
                key={i._id}
                user={i}
                handler={selectMemeberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))}
          </Stack>
        ) : (
          <Typography textAlign={"center"}>No Friends</Typography>
        )}
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        padding={"2rem"}
      >
        <Button onClick={closeHandler} color="error">
          Cancel
        </Button>
        <Button
          onClick={addMemeberSubmitHandler}
          variant="contained"
          disabled={isLoadingAddMember}
        >
          Submit Changes
        </Button>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
