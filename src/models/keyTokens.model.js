const mongoose = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Key'    
const COLLECTION_NAME = 'Keys'


// Declare the Schema of the Mongo model
var TokensSchema = new mongoose.Schema({
    user:{
        type:String, 
        required:true,
        ref : 'Shop', 
        
    },
    publicKey:{
        type:String,
    },
    privateKey:{
        type:String,
    },
    refressToken:{
        type:Array ,
        defaut:[],  
    },
    
},{   
        timestamps:true,
        collection: COLLECTION_NAME,
    
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, TokensSchema);
