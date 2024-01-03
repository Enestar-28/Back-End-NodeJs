const mongoose = require('mongoose')
require('dotenv').config()
const { countConnect } = require('../helper/check.connect') 
const initMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
}


class Database {
    constructor(){
        this.connect()

    }
    //connect to database mongodb
    connect(){
        mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            countConnect()
            console.log('MongoDB connected')
          
            
        })
        .catch((error) => {
            console.log(error)
        })
    }
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }

        return Database.instance 
    }
}

const instanceMongoDB = Database.getInstance()


module.exports = {
    instanceMongoDB
}

