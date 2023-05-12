const mongoose =require("mongoose");
const connectDb = async () => {
    try {
        const conn= await mongoose.connect('mongodb://127.0.0.1:27017/travel');
        console.log(`Database connected on ${conn.connection.host}`);
    }catch(error){
        console.log("Database connection failed " + error.message);
        process.exit(1);
    }
}

module.exports=connectDb;
