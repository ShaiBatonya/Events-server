const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    user_name: {
        type:String,
        required:true
    },
    user_password: {
        type:String,
        required:true
    }
});


userSchema.pre("save",async function (next){
    const hash = await bcrypt.hash(this.user_password,15);
    this.user_password = hash;
    next();
})

module.exports = mongoose.model("users", userSchema);