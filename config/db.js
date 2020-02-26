const mongoose = require('mongoose');
require('dotenv').config();
const MONGOURI = `mongodb+srv://jacob:${process.env.password}@usersignup-0cehi.mongodb.net/test?retryWrites=true&w=majority`;

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to the Database");
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = InitiateMongoServer;