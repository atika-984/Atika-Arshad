import React,{useState} from 'react'

const Login = () => {
  const  empty={
    email:"",
    password:""
  }
  // state for handle the login inputs

const [handle, setHandle]= useState(empty)

const loginHandler=(e)=>{
  const {name, value}= e.target;
  setHandle({...handle,[name]:value})
  console.log(handle)
}
//function for login
const loginApi=async()=>{
  if(handle.email==""||handle.password==""){
    alert("Please Enter the Fields First")
  }else{
    let record= await fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "content-Type": "application/json",
       },
       body:JSON.stringify(handle)
    })
    record= await record.json()
    if(record.message=="Login Successfully"){
       // store id in SessionStorage
       sessionStorage.setItem("userId",record.LoginUser._id)
       sessionStorage.setItem("userEmail",record.LoginUser.email)
       alert("Login Successfully")
 
     }else{
       alert("Username and Passwor is invalid")
     }
   }
 }
  return (
   <div className="container">
  <div className="row">
    <div className="col-md-4 col-md-offset-7">
      <div className="panel panel-default">
        <div className="panel-heading"> <strong className>Login</strong>
        </div>
        <div className="panel-body">
          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-3 control-label">Email</label>
              <div className="col-sm-9">
                <input type="email" name="email" onChange={loginHandler} className="form-control" id="inputEmail3" placeholder="Email" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-3 control-label">Password</label>
              <div className="col-sm-9">
                <input type="password" name="password" onChange={loginHandler} className="form-control" id="inputPassword3" placeholder="Password" required />
              </div>
            </div>
            <div className="form-group last">
              <div className="col-sm-offset-3 col-sm-9">
                <button type="submit" onClick={loginApi } className="btn btn-success btn-sm">Sign in</button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login