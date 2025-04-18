const mongoose = require('mongoose');

const pointSchema = mongoose.Schema({
    timeStamp : Number,
    coords : {
        latitude : Number,
        longitude : Number, 
        altitude : Number,
        accuracy : Number,
        heading : Number,
        speed : Number 
    }
})
const TrackSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        
    },
    name : {
        type : String,
        default :'',
    },
    locations :[pointSchema]
});


mongoose.model('Track', TrackSchema);