const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    unique: true
  }
})

exports.Image = mongoose.model('Image', imageSchema)
