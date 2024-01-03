const mongodb = require('mongoose')

// count connect to mongodb
const countConnect = () =>{
    const numConnection = mongodb.connections.length
    console.log('Number Connect:' ,numConnection)

}

//check over load connect to mongodb




module.exports = {
    countConnect
}





