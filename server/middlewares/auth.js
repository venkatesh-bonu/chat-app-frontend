import { ErrorHandler } from "../utils/utility.js";
import { TryCatch } from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    const token = req.cookies["jwt_token"];
    // console.log(token)
    if (!token)
       return next(new ErrorHandler("Please Login to access the route", 401));
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedData._id;
    next();
};
