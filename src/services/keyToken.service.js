

const keyTokenModel = require("../models/keyTokens.model");


class KeyTonkenService{

    static createKeyToken = async ({user, publicKey,privateKey}) =>{
        try{
            const publicKeyString = publicKey.toString();
            const newKeyToken = await keyTokenModel.create({
                user ,
                publicKey: publicKeyString,
                privateKey
            });
            return newKeyToken ?  newKeyToken.publicKey : null;

        }catch(error){
            console.log('error create key token');
            throw error;
        }

    }
}


module.exports = KeyTonkenService;