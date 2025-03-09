import mongoose,{ Schema,model,Types } from "mongoose";

const schema = new Schema({
    sender : {
        type : Types.objectId,
        ref : "User",
        required : true
    },
    chat : {
        type : Types.objectId,
        ref : "Chat",
        required : true
    }, 
    content : String,
    attachements : [
        {
            public_id : {
                type : String,
                required : true
            },
            url : {
                type : String,
                required : true
            }
        }
    ]
},{
    timestamps : true
})


export const Message = mongoose.models.Message ||  model("Message",schema);
