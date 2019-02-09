const Place = require('./models/place');
const resolvers = {
    Query : {
        async allPlaces () {
            return await Place.find();
        },
        async getPlace (root,{_id}){
            return await Place.findById(_id);
        }
    },
    Mutation : {
        async createPlace(root, {
            input
        }) {
            return await Place.create(input);
        },
        async updatePlace(root,{_id,input}){
            return await Place.findOneAndUpdate({_id},input,{new: true})
        },
        async deletePlace(root,{_id}){
            return await Place.findByIdAndDelete(_id);
        }
    }
};

module.exports = resolvers;