const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Geo Location Schema
const GeoSchema = new Schema({
    type:{
        default:"Point",
        type:String
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})

//Create a ninja and its model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is require']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
