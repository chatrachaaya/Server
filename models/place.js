import mongoose from 'mongoose';
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

export default mongoose.model('place', PlaceSchema)