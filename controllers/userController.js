const userModel = require('../models/userModel')
// import JWT from "jsonwebtoken";
var JWT = require('jsonwebtoken');

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password })
        if (!user) {
            return res.status(404).send('User Not Found');
        }
        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).json({
            success: true,
            user,
            token
        });
    } catch (error) {
        console.log(error)
        return res.status(400).send('Error , Try again')
    }

}

const registerController = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        const user = await newUser.save();
        res.status(200).json({ user });
    } catch (error) {
        console.log(error)
        return res.status(400).send('Error , Try again')
    }

}

module.exports = { loginController, registerController }