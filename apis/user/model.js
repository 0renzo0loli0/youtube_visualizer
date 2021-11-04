const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username:   {type: String},
    password:   {type: String},
    nameAlias: {type: String}
})

userSchema.methods.encrypt = (password)=>{
    return password
}

userSchema.methods.decrypt = (password)=>{
    return password
}

module.exports = mongoose.model('User', userSchema)