const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  "description": {
        type: String,
        required: true,
        trim: true
    },
    "completed": {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})


const Test = mongoose.model('Test', testSchema)
module.exports = Test
