import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const connectDb = (uri) => {
  mongoose
    .connect(uri, { dbName: "chattu" })
    .then((data) => console.log(`Database Connected: ${data.connection.host}`))
    .catch((err) => console.log(err));
};

export const cookieOption = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

export const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return res.status(code).cookie("jwt_token", token, cookieOption).json({
    success: true,
    token,
    message,
    user,
  });
};

export const emitEvent = (req, event, user, data) => {
  console.log("emmiting event")
};
