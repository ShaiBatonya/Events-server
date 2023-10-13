const mongoose = require("mongoose")

const connection = async()=>{

    let url = process.env.MONGO_URI

    try {

        await mongoose.connect(url)
        console.log('DB connected');
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection