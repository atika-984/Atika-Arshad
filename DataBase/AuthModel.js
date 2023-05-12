const mongoose =require ('mongoose')
const AuthSchema = mongoose.Schema({
   email:{
      require:true,
      type:String
   }, 
   CardNumber:{
        required:true,
        type:String
    },
    CardName:{
        required:true,
        type:String
     },
     Expiration:{
        required:true,
        type:String
     }

})
module.exports=mongoose.model("Auth" , AuthSchema)