var mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    feedback: String
  })
  
  const User = mongoose.model('User', userSchema)
  
  module.exports = User