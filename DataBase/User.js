const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        String,
        // require:[true ,'name field is required']
    },
    email:{
        String,
        // require:[true ,'email field is required']
    },
    
    password:  {
        String,
        // require:[true ,'password field is required']
}
});
module.exports = mongoose.model('users',userSchema)