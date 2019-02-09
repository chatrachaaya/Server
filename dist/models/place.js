const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    price : {
        type: Number
    }
});

module.exports = mongoose.model('place', PlaceSchema)