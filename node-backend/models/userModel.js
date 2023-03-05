const mongodb = require('mongoose');

const usersSchema = mongodb.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Provide Firse Name Please"]
        },
        LastName: {
            type: String,
            required: [true, "Provide Last Name Please"]
        },
        email: {
            type: String,
            required: [true, "Provide Email Please"]
        },
        phone: {
            type: String,
            required: [true, "Provide Phone Number Please"]
        },
        image: {
            type: String,
            required: [true, "Provide Image Please"]
        }
    },
    {
        timeStamp: true
    }
)

module.export = mongodb.model('User', usersSchema);
