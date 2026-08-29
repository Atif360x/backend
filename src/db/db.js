const mongoose = require('mongoose')

async function connnectDB() {
    
    await mongoose.connect("mongodb+srv://atif_:jq8GyzvwJV3MbUNE@backend.pcjlqgl.mongodb.net/projectOne")

    console.log("connected to DB");

}

module.exports = connnectDB;