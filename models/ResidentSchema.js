let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ResidentSchema = new Schema(
    {
        firstName :  String,
        lastName : String,
        pets : [],
        single : Boolean,
        phoneNumber : Number,
    }
);

module.exports = mongoose.model('resident200414', ResidentSchema);