/*
  This is the what you think form
*/
const validator = require("validator")

const mongoose = require('mongoose')

const wytSchema = new mongoose.Schema({
    "feedback-form-name": {
        type: String,
        required: true,
        trim: true
    },
    "feedback-form-email": {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invlaid')
            }
        }
    },
    "feedback-form-store": {
      type: String,
      require: true,
      trim: true,
      lowercase: true
    },
    "feedback-form-date-of-visit": {
      type: String,
      require: true,
      trim: true,
      lowercase: true
    },
    "feedback-form-cleanliness": {
      type: String,
      require: true,
      trim: true,
      lowercase: true
    },
    "feedback-form-service": {
      type: String,
      require: true,
      trim: true,
      lowercase: true
    },
    "feedback-form-more-feedback": {
      type: String,
      require: true,
      trim: true,
      lowercase: true
    },
    "feedback-form-visit-again": {
      type: String,
      require: true,
      trim: true,
      lowercase: true
    },
    "feedback-form-botcheck": {
      type: String,
      require: true,
      trim: true,
      lowercase: true
    }
}, {
    timestamps: true
})


const WYT = mongoose.model('WYT', wytSchema)
module.exports = WYT
