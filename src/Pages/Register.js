import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  let adminemail = sessionStorage.getItem('userEmail');
  const sesionExpire = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  const empty = {
    name: '',
    email: '',
    password: '',
  };
  const [handle, setHandle] = useState(empty);
  const accountHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  const createUser = async () => {
    if (handle.name === '' || handle.email === '' || handle.password === '') {
      alert('Please Enter the Input Fields First');
    } else {
      let record = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(handle),
      });
      record = await record.json();
      if (record === 'Email Already Exist') {
        alert('Email Already Exist');
      } else {
        alert('User Created Successfully');
      }
    }
  };

  return (
    <div>
        <div className="tour">
        <div
           className='nav'
                 style={{
                              backgroundImage: `url("./pics/ang.jpg")`,
                                           backgroundRepeat: 'no-repeat',
                                                      backgroundSize: 'cover',
             height:"60vh"
           }}
        >
    <h1 style={{color:"black"}}>Travel</h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/Register'>Register</Link>
      </li>
      <li>
        <Link to='/Login'>Login</Link>
      </li>
      <li>
        <Link to='/Services'>Services</Link>
      </li>
    </ul>
  </div>
</div>

      

      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-8 col-lg-6 mx-auto'>
            <div className='text-center mt-4'>
              <h1 className='h2'>Register Form</h1>
            </div>
            <div className='card'>
              <div className='card-body'>
                <div className='m-sm-4'>
                  <form>
                    <div className='form-group'>
                      <label>Name</label>
                      <input
                        className='form-control form-control-lg'
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        onChange={accountHandler}
                      />
                    </div>

                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        className='form-control form-control-lg'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        onChange={accountHandler}
                      />
                    </div>

                    <div className='form-group'>
                      <label>Password</label>
                      <input
                        className='form-control form-control-lg'
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        onChange={accountHandler}
                      />
                    </div>

                    <div className='text-center mt-3'>
                      <button
                        onClick={createUser}
                        type='submit'
                        className='btn btn-lg btn-primary'
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
