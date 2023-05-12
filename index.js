const express = require("express");
const cors =require ('cors');
const connectDb =require('./DataBase/config')
const User = require('./DataBase/User');

const AuthModel = require("./DataBase/AuthModel");
// require('./DataBase/config');


const app = express();

app.use(express.json());

app.use(cors());

connectDb();

const usersData=[
    
        {
       "id":1,
       "name":"atika",
       "email":"atika123@gmail.com",
       "password":"234"
        },
        {
            "id":2,
            "name":"tayyba",
            "email":"tayyba123@gmail.com",
            "password":"0987"
             },
             {
                "id":3,
                "name":"ammara",
                "email":"ammara0987@gmail.com",
                "password":"09876"
                 }
]
// app.get('/',(req,res)=>{
//     res.send("first Get method called")

// })

// app.get('/users' , (req, res)=>{
//     res.send(usersData)

// })

// app.post('/users',(req,res)=>{
//     res.send(req.body)
// })
// app.post('/',(req,res)=>{
//     res.send(req.body)
// })
// saving data mongodb
app.post('/register', async (req, res)=>{
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
    if(result){
        console.log("Data saved succesfully")

    }else{
        console.log("Error in Data saving")
    }
})
// retrieving /fetching Data from mongodb

app.get('/usersData', async (req, res)=>{
    const users= await User.find();
    if(users.length>0){
        res.send(users)
    }else{
        res.send({msg:'no user found in Database'})
    }
})


// by id

// app.get("/get/:id",(req,res)=>{
//     const id = req.params.id;

//     User.findById(id,(err,user)=>{
//         if(err){
//             res.status(500).send(err.message)
//         }else{
//             res.status(200).send(user)

//         }
//     })
// })


// api for sign up
app.post("/signup" , async(req,res)=>{
    const userDetails = await AuthModel(req.body)
    try{
        const userExist=await AuthModel.findOne({
            email:req.body.email
        })
         //Asume email already exist_
         if(userExist){
            res.json("Email Already Exist")
        }else{
     //for new user
    userDetails.save();
    res.json("User Created Successfully")
        }
    }
    catch{
        console.log("Api failed")
    }
})

// API For Login
app.post("/login",async(req,res)=>{
    try{
        const LoginUser= await AuthModel.findOne({
            email:req.body.email,
            password:req.body.password
        })
        //assume condition true/ credentials matched
        if(LoginUser){
         res.json({message:"Login Successfully",LoginUser:LoginUser})
        }else{
            res.json("userName or password is invalid")
        }
    }
    catch{}
})

app.get("/registeruser",async(req,res)=>{
    let userData = await User.find()
    if( userData.length>0){
        res.send(userData)
    }else{
        res.send({msg:"no user Data found in Database"})
    }

})

app.delete("/user/:id",async(req,resp)=>{
    let user = await User.deleteOne({_id: req.params.id})
    if(user){
        resp.send(user)
    }else{
        resp.send({msg: "No record found"})
    }
})

app.get("/userdetail/:id",async(req,resp)=>{
    let result = await User.findOne({_id: req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({msg: "No user found"})
    }
})

app.put("/userupdate/:id",async(req,resp)=>{
    let data = await User.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )    
    resp.send(data)
})
port=5000;
app.listen(port, () =>{
    console.log(`server is started ${port}`)
});