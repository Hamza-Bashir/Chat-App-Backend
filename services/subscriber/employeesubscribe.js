const {subscriber} = require("../../config/redis")
const Org = require("../../models/organization")


const addMemberSubscribe = async () => {
    await subscriber.subscribe("employee_created", async (message) => {
        const {id, organizationMember} = JSON.parse(message)

        const existingOrganization = await Org.findOne({organizationOwner : id})

        await Org.findByIdAndUpdate(
            existingOrganization._id,
            {$push : {organizationMember : organizationMember}}
        )
    })
}


module.exports = addMemberSubscribe