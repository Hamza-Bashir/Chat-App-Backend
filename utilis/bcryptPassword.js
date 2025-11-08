const bcrypt = require("bcryptjs")

const hashPassword = async (pass) => {
    return await bcrypt.hash(pass, 10)
}


const comparePassword = async (plainPassword, hashPassword) => {
    return await bcrypt.compare(plainPassword, hashPassword)
}

module.exports = {hashPassword, comparePassword}