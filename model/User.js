const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    booked_slots: []
}, {
    versionKey: false
})

module.exports = mongoose.model('User', UserSchema)