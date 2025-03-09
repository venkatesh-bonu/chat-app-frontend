import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { cookieOption, sendToken } from "../utils/features.js";

import dotenv from "dotenv";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

dotenv.config();

// Login user and save token in cookie
export const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).select("+password");
  if (!user) return next(new ErrorHandler("Invalid Username", 404));

  const isPasswordMatch = await compare(password, user.password);
  console.log(username, password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Password", 404));
  }
  sendToken(res, user, 200, `Welcome back ${username}`);
});

export const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;
  const avatar = {
    public_id: "$dfsdDflkf",
    url: "asdfs",
  };

  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });
  //   res.status(200);
  sendToken(res, user, 201, "User created");
};

export const getMyProfile = TryCatch(async (req, res, next) => {
  // we store req.user as a id from jwt.verify
  const user = await User.findById(req.user);
  res.status(401).json({
    success: true,
    user,
  });
});

export const logout = TryCatch(async (req, res, next) => {
  return res
    .status(200)
    .cookie("jwt_token", "", { ...cookieOption, maxAge: 0 })
    .json({
      success: true,
      message: "Logged Out successfully",
    });
});


export const searchUser = TryCatch(async (req, res, next) => {
    const {name} = req.query 
    
    return res
      .status(200)
      .json({
        success: true,
        message: name,
      });
  });