const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type: String, require: true},
    email:{type: String, unique: true, required:true, lowercase: true},
    password: {type: String, required: true, select: false},
    createdAt: {type: Date, default: Date.now}
})

const user = mongoose.model('User', userSchema)

module.exports(user)

//onde adicionar a contribuição do usuário?