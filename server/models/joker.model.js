
const mongoose = require("mongoose")

const JokerSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "I believe your pet has hair"],
        minlength: [3, "Hair color must be at least 3 characters long"]        
    },
    punchline: {
        type: String, // Boolean, Array
        required: [true, "I believe your pet has hair"],
        minlength: [3, "Hair color must be at least 3 characters long"] 
    }
}, {timestamps : true})


// OPTION 1
// const Pet = mongoose.model('Pet', PetSchema)
// module.exports = Pet

// OPTION 2
module.exports.Joker = mongoose.model('Joker', JokerSchema)