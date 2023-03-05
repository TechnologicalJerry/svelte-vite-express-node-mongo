const User = require("../models/userModel");

exports.usersList = async (req, res) => {
    console.log('Controller :: Getting all users list function');
    try {
        const userList = await User.find({});
        res.status(200).json(userList);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.creatUser = async (req, res) => {
    console.log('Controller :: Create users function');
    // const postData = req.body;
    // console.log('Creat-User Data In Controller', req);
    // res.send(postData);
    try {
        const postData = await User.creat(req.body);
        console.log('Post Data', postData);
        return res.json({
            message: "Account created successfuly.",
            status: 200,
        });
    } catch (error) {
        return res.json({
            message: "Failed to create account.",
            status: 500,
            error: error.message,
        });
    }
}
