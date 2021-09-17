const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const e = require('express');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    }, 
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    tokens: [
        {
            token:{
                type: String,
                required: true,
            }
        }
    ]
})


// Hashing of the password and confirm password
userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12);
        
    }
    next();
    
    
    
})

userSchema.methods.generateToken = async function () {
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_TOKEN);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    }
    catch(err){
        console.log(err);
    }
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;