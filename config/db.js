const mongoose = require('mongoose');


const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb database ${mongoose.connection.host}`);
    }catch (error){
        console.log(`mongodb database error ${error}`);
    }
}

module.exports =connectDB


// //import mongoose
// const mongoose=require('mongoose');

// const connectionString = process.env.MONGO_URL
// mongoose.connect(connectionString).then(()=>{
//     console.log('Mongodb connection established..')
// })
// .catch(err=>console.log('mongodb connection error'+err))
