const mongoose = require("mongoose")

let url = "mongodb://127.0.0.1:27017/ecomServer"

const DbConnect = async () => {
    try {
        await mongoose.connect(url)
        console.log("DB connected successfully");
    }
    catch (error) {
        console.log("DB not connected", error);
    }

}

module.exports = DbConnect