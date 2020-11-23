const mongoose = require('mongoose');

const WatchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, 'Please add a quantity'],
        trim: true
    },
    type: {
        type: String,
        required: [true, 'Please add a type']
    },
    counter: {
        type: Number,
        unique: true,
        default: 0
    },
    description: {},
    mainImg: {
        type: String,
        default: 'no-photo.jpg',
        required: [true, 'Please add a photo']
    },
    optionsImgs: [],
    mainImg: {
        type: String,
        default: 'no-photo.jpg',
        required: [true, 'Please add a photo']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model('Watch', WatchSchema)