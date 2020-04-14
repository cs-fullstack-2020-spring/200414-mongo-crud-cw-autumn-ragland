// import mongoose
let mongoose = require('mongoose');
// create reference to Schema class
let Schema = mongoose.Schema;

// define model
let ResidentSchema = new Schema(
    {
        firstName :  String,
        lastName : String,
        pets : [],
        single : Boolean,
        phoneNumber : Number,
    }
);

// export model 
module.exports = mongoose.model('resident200414', ResidentSchema);