const mongoose = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Apikey'
const COLLECTION_NAME = 'Apikeys'


// Declare the Schema of the Mongo model
var apiKeySchema = new mongoose.Schema({
    key:{
        type:String,
        required:true,
        unique:true,

    },
    status:{
        type:Boolean,
        default:true,    
    },
    Permissions:{
        type:[String],
        required:true,
        enum: ['read','write','delete'],
    },
},{
        timestamps:true,
        collection: COLLECTION_NAME,
    },
    
);

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, apiKeySchema);