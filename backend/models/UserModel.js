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
            required: false
        },
        phoneNumber: {
            type: String,
            required: false
        },
        avatar: {
            type: String,
            required: false
        }
    }
);

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;