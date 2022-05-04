const mongoose = require('mongoose');


const OutPersonSchema = new mongoose.Schema({
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

module.exports = OutPerson = mongoose.model('outperson', OutPersonSchema);