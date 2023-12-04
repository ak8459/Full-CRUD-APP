const mongoose = require('mongoose');
// require('dotenv').config()
const connection = mongoose.connect("mongodb+srv://akashsharma01247:akash@users.by2bzvj.mongodb.net/?retryWrites=true&w=majority")

module.exports = { connection }