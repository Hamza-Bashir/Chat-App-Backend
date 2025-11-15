const mongoose = require("mongoose")

const msgSchema = new mongoose.Schema({
    conversationType : {
        type : String,
        enum : ["Group", "Individual"]
    },
    groupId : {
        type : mongoose.Types.ObjectId,
        ref : "Group",
        default : null
    },
    participantId : [
        {
            type : mongoose.Types.ObjectId,
            ref : "User"
        }
    ],
    senderId : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    message : {
        type : String
    },
    type : {
        type : String,
        enum : ["text", "image", "file"],
        default : "text"
    }
}, {
    timestampe : true
})


module.exports = mongoose.model("Message", msgSchema)