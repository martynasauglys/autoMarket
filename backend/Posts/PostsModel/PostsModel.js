const mongoose = require('mongoose')

let PostSchema = new mongoose.Schema({
    type: String,
    make: String,
    model: String,
    year: Number,
    mileage: Number,
    fuelType: String,
    transimssionType: String,
    price: Number,
    description: String,
    image: {
        type: String,
        required: true,
    },
    timeStamp: Number,
})

let Post = mongoose.model('Post', PostSchema)

module.exports = Post
