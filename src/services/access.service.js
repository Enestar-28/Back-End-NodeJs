
const shopModel = require("../models/shop.model");
const bcrypt = require('bcryptjs');
const KeyTonkenService = require("./keyToken.service");
const createTokenPair = require("../auth/authUtils");
const crypto = require('crypto');

const Roles ={
    shop: 'shop',
    admin: 'admin',
    user: 'user'

}


class AccessService {
  constructor() {
    this.accessModel = new AccessModel();
  }

  static signUp = async (name, email, password) => {
    console.log("Thong tin nguoi dung:\n",name,'\n',email ,'\n',password)
    try {
        //check email exist 
        // const holderShop = await shopModel.findOne({email}).lean();    

        // if(holderShop) {
        //     throw new Error('Email already exists');
        // }
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newShop = await shopModel.create({
            name,
            email,
            password: hashedPassword,
            roles: [Roles.shop]
        });
        
        if(newShop) {
            //create private key and public key by crypto
            const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
                modulusLength: 4096,
                publicKeyEncoding: {
                    type: 'pkcs1',
                    format: 'pem'
                },
                privateKeyEncoding: {
                    type: 'pkcs1',
                    format: 'pem'
                }
            })


            // // don gian hon ctypto 
            // const publicKey = crypto.randomBytes(64).toString('hex');
            // const privateKey = crypto.randomBytes(64).toString('hex');
            console.log(publicKey, privateKey);
            console.log('--------------------------------------------------------------------');
           
            //
            const publicKeyString  = await KeyTonkenService.createKeyToken({
                user: newShop._id,
                publicKey,
                privateKey
              
            })

            
            
            if(!publicKeyString) {
                throw new Error('Can not create publicKeyString');
            }


            //create token pair 
            const tokens = await createTokenPair({userId:newShop._id, email}, publicKeyString, privateKey);

            console.log(tokens);
            return {
                code:201,
                message: 'Create shop successfully',
            }      
        }
        //save user to db

        //send email to user

    return {
        code: 500,
        message: 'Internal server error',
    }
     
    
    } catch (error) {
        throw error
    }
  };

}


module.exports = AccessService;