const mongoose = require("mongoose")

const groupSchema = new mongoose.Schema({
    groupName: {
        type : String
    },
    groupAdmin : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    groupMember : [
        {
            type : mongoose.Types.ObjectId,
            ref : "User"
        }
    ]
},{
    timestamps : true
})


module.exports = mongoose.model("Group", groupSchema)