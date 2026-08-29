const mongoose = require('mongoose')

async function connectDB () {

    await mongoose.connect("mongodb+srv://atif_:jq8GyzvwJV3MbUNE@backend.pcjlqgl.mongodb.net/hally")

    console.log("connected to DB")

}

module.exports = connectDB