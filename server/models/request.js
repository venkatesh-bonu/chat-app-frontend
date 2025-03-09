import mongoose,{ Schema,model,Types } from "mongoose";
const schema = new Schema({
    status : {
        type : String,
        default : "pending",
        enum : ["pending","accepted","rejected"]
    },
    sender : {
        type : Types.objectId,
        ref : "User",
        required : true
    },
    receiver : {
        type : Types.objectId,
        ref : "User",
        required : true
    },
    chat : {
        type : Types.objectId,
        ref : "Chat",
        required : true
    },
},{
    timestamps : true
})


export const Request = mongoose.models.Request ||  model("Request",schema);
