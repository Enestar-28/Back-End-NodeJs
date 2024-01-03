

const jwt = require('jsonwebtoken');

const createTokenPair = async (payload ,publickey,privatekey) => {  
    try{
        const accessToken = await jwt.sign(payload, privatekey, {
            algorithm: 'RS256',
            expiresIn: '3 days',
        });

        const refressToken = await jwt.sign(payload, privatekey, {
            algorithm: 'RS256',
            expiresIn: '7 days',
        });

        jwt.verify(accessToken, publickey, (err, decoded) => {
            if (err) {
                throw err;
            }
            console.log('decoded verify:' ,decoded);
        });

        return {accessToken, refressToken};
    }catch(error){
        throw error;
    }
}


module.exports = createTokenPair;