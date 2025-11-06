const {subscriber} = require("../../config/redis")
const User = require("../../models/auth/index")

const startOrgSubsribe = async () => {
    await subscriber.subscribe("organization_created", async (message) => {
        const {_id, orgId} = JSON.parse(message)

        await User.findByIdAndUpdate(
            _id,
            {organizationId : orgId}
        )
    })
}

module.exports = startOrgSubsribe