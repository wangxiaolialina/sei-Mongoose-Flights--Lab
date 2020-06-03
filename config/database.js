const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Flight = new Schema({
    airline: {
        type:String
    }
    airport: {
        type:String
    }
    flightNo: {
        type:Number
    }
    departs: {
        type:Date
    }
})