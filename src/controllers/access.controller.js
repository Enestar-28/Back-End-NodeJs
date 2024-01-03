const AccessService = require('../services/access.service')

class AccessController {
    signUp = async (req,res ) => {

        try {
           
            return res.status(201).json( await AccessService.signUp(req.body.name, req.body.email, req.body.password))
        }
        catch(error) {
            console.log(error);
        }
    }
}

module.exports = new AccessController()