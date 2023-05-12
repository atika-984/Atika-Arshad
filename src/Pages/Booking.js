import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] =useState('');
  const [name, setName] = useState('');
  const [cardNumber, setcardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigage = useNavigate();


  const saveData = async(e) =>{
    if(!email || !name || !cardNumber || !expiration){
      setErrorMsg(true)
      return false
    }
    e.preventDefault();
    let abcd = await fetch("http://localhost:5000/register",{
      method: 'POST',
      body: JSON.stringify({email, name, cardNumber, expiration}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    abcd = await abcd.json();
    setData(abcd);
    navigage('/usersdetail')
  }


  return (
    <div className="container">
      <form className="w-50">
      <div className="mb-3">
          <label htmlFor="email" className="form-label">
             E-mail
          </label>
          <input
            type="email"
            required
            className="form-control"
            id="email"
            onChange={(e)=>setEmail(e.target.value)}            
          /> 
          {errorMsg && !email && <span className="errorHandle">Email is required</span>}         
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
             Name
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="name"
            onChange={(e)=>setName(e.target.value)}            
          /> 
          {errorMsg && !name && <span className="errorHandle">User name is required</span>}         
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputCardNumber1" className="form-label">
            Card Number
          </label>
          <input
            type="number"
            className="form-control"            
            id="exampleInputCardNumber1" 
            onChange={(e)=>setcardNumber(e.target.value)}           
          />     
          {errorMsg && !cardNumber && <span className="errorHandle">Card is mandatory to get payment</span>}              
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputExpiration" className="form-label">
            Expiration
          </label>
          <input
          required
            type="number"
            className="form-control"
            id="exampleInputExpiration1"
            onChange={(e)=>setExpiration(e.target.value)}
          />
          {errorMsg && !expiration && <span className="errorHandle">Please enter password before regiter</span>}         
        </div>
        
        <button onClick={saveData} type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
