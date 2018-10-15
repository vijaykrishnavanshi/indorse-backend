const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({  
    user_id: String,
    name: String,
    email: String,
    mobile_number: String,
    address: String,
    company: String,
    title: String
});

module.exports = mongoose.model('User', UserSchema);
