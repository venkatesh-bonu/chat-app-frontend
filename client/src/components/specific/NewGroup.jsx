import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../ constants/sampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {

  const [members,setMembers] = useState(sampleUsers)
  const [selectedMembers,setSelectedMembers] = useState([])

  const selectMemeberHandler = (id) => {
    setSelectedMembers(prev => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev,id]) 
  };
  console.log(selectedMembers)
  const submitHandler = () => {}
  const closeHandler = () => {}
  const groupName = useInputValidation("");

  return (
    <Dialog open onClose = {closeHandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle variant="h4" textAlign={"center"}>
          New Group
        </DialogTitle>
        <TextField value={groupName.value} onChange = {groupName.changeHandler} label="Group Name" />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((i) => (
            <UserItem user={i} key={i._id} handler={selectMemeberHandler} isAdded = {selectedMembers.includes(i._id)} />
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="outlined" color="error" size="large">
            Cancel
          </Button> 
          <Button variant="contained" size="large" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
