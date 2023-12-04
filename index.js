const express = require('express');
const { connection } = require('./db');
const cors = require('cors');

require('dotenv').config()
const  UserRouter  = require('./routes/User')
const app = express();
app.use(cors())
app.use(express.json());


app.use('/contact', UserRouter);

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log(`Server is running on port ${process.env.port}`);
    } catch (error) {
        console.log(error);
    }
})