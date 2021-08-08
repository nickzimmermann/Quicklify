// Import mongoose
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true            
        },
        email: {
            type: String,
            required: true            
        },
        password: {
            type: String,
            required: true            
        },
        phoneNumber: {
            type: String,
            required: true            
        },
    }
);

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;