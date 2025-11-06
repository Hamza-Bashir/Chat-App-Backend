const mongoose = require("mongoose")

const orgSchema = new mongoose.Schema({
    organizationName : {
        type : String
    },
    organizationEmail : {
        type : String
    },
    organizationPhone : {
        type : String
    },
    organizationOwner : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    organizationMember : [
        {
            type : mongoose.Types.ObjectId,
            ref : "User",
            default : null
        }
    ],
    industry : {
        type : String
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Organization", orgSchema)