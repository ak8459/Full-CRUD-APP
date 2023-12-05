const express = require('express')
const User = require('../model/User')
const UserRouter = express.Router();


// add user
UserRouter.post('/', async (req, res) => {
    const { name, email, phone, label, booked_slots } = req.body
    try {
            res.status(200).send({ message: 'User created successfully' })
        // const user = await User.findOne({ email })
        // if (user) {
        //     return res.status(400).send({ message: 'User already exists' })
        // }

        // const newUser = new User({
        //     name,
        //     email,
        //     phone,
        //     label,
        //     booked_slots
        // })
        // await newUser.save()

        res.status(200).send({ message: 'User created successfully' })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong' })
    }




})

// get all users
UserRouter.get('/users', async (req, res) => {
    try {
        // const users = await User.find()
        // res.status(200).send(users)
        res.send({ message: 'User created successfully' })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong' })
    }
})

//delete a user

UserRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        await User.findByIdAndDelete(id)
        res.status(200).send({ message: 'User deleted successfully' })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong' })
    }
})

//update a user

UserRouter.patch('/update/:id', async (req, res) => {
    const { id } = req.params
    const {  booked_slots } = req.body
    try {
        const user = await User.findByIdAndUpdate(id, {
            ...req.body,
            booked_slots
        })
        res.status(200).send({ message: 'User updated successfully' })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong' })
    }
})

 UserRouter.post("/appointment", async (req, res) => {
     
 })







module.exports = UserRouter
