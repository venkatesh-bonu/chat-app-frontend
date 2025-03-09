import express from "express";
import { login, logout, newUser,searchUser } from "../controllers/user.js";

import { singleAvatar } from "../middlewares/multer.js";
import { errorMiddleWare } from "../middlewares/error.js";
import { getMyProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

app.post("/login",login);

// multer uploads multerUploads.single("avatar") single represents no of files and at the name of avatar
app.post("/new", singleAvatar, newUser);


// after here the user must be logged in to access the routes
app.use(isAuthenticated)

app.get("/me",getMyProfile)

app.get("/logout",logout)

app.get("/search",searchUser)

export default app;
