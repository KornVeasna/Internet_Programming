const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/iptp09',{
            autoIndex: true,
            serverSelectionTimeoutMS: 30000
        })
        console.log("Mongo connected~");
    } catch (err) {
        console.log("Mongoose: ",err);
    }
} 