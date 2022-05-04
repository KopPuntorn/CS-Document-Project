const mongoose = require('mongoose');


const OutMoneySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    pic: {
        type: String
    },
    dateFirst: {
        type: String
    },
    numTo: {
        type: Number
    },
    locate: {
        type: String
        
    },
    dateGen: {
        type: String
    
    },
    from: {
        type: String
      
    },
    to: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    file_path: {
      type: String,
      
    },
    file_mimetype: {
      type: String,

    }

}, { timestamps: true});

module.exports = OutMoney = mongoose.model('outmoney', OutMoneySchema);