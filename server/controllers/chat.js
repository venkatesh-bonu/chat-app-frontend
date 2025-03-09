import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";
import { Chat } from "../models/chat.js";
import { emitEvent } from "../utils/features.js";
import { ALERT, REFETCH_CHATS } from "../constants/events.js";

const newGroupChat = TryCatch(async (req, res, next) => {
  const { name, members } = req.body;

  if (members.length < 2)
    return next(
      new ErrorHandler("Group chat must have at least 3 members", 400)
    );
  const allMemebers = [...members, req.user];
  await Chat.create({
    name,
    groupChat: true,
    creator: req.user,
    members: allMemebers,
  });

  emitEvent(req, ALERT, allMemebers, `Welcome to ${name} group Chat`);
  emitEvent(req, REFETCH_CHATS, members, `Welcome to ${name} group Chat`);

  return res.status(201).json({
    success: true,
    message: "Group Chat created",
  });
});

const getMyChats = TryCatch(async (req, res, next) => {
  const chats = await Chat.find({members : req.user}).populate(
    "members",
    "name username avatar"
  )

  return res.status(201).json({
    success: true, 
    chats,
  });
});

export { newGroupChat, getMyChats };
