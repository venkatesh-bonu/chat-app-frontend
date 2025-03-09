import express from "express";
import { connectDb } from "./utils/features.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleWare } from "./middlewares/error.js";

import userRoute from "./routes/user.js";
import chatRoute from "./routes/chat.js";
import { createUser } from "./seeders/user.js";

const app = express();

dotenv.config({
  path: "./.env",
});

const MONGO_URI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

connectDb(process.env.MONGO_URI);

// for seeding the database data
// createUser(10)

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoute);
app.use("/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(errorMiddleWare);

app.listen(port, () => {
  console.log(`sever is listening at ${port}`);
});
