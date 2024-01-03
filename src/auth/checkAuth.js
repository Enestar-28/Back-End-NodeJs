'use strict'

const HEADER ={
    API_KEY : 'x-api-key',
    AUTHORIZATION : 'authorization',
}

const { findById } = require("../services/apikey.service")

const apiKey = async (req, res, next) => {
    try {
        const key = req.headers[HEADER.API_KEY].toString()
        if(!key){
            throw new Error('No api key provided')
        }       
        //check objeck 
        const objKey = await findById(key)
        if(!objKey){
            throw new Error('Invalid api key')
        }
        req.apiKey = objKey
        return next()

    } catch (err){
        return res.status(401).json({
            message: err.message,
        })
    }
}


module.exports = apiKey