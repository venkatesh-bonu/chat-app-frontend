import express from "express";
import { getMyChats, newGroupChat } from "../controllers/chat.js";

import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

// after here the user must be logged in to access the routes
app.use(isAuthenticated);

app.post("/new",newGroupChat)

app.get("/my",getMyChats)

export default app;
