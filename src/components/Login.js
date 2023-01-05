import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './login.css'
import { useDataValue } from './Datalayer';

function Login() {
  const [{cart},dispatch] = useDataValue();
  const history = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const login = (event) =>{
    event.preventDefault(); 
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) =>{
      history("/");
    })
    .catch((e) => alert(e.message));
  }
  const register = (event) =>{
    event.preventDefault(); 
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) =>{
      history("/");
    })
    .catch((e) => alert(e?.message));
  }
  return (
    <div className="login">
      <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" alt="" />
      <div className="sign_in">
      <p>Sign In</p>
      <h5>Email Id</h5>
      <input type="email" placeholder='Email Id' value = {email} onChange = {e =>{setEmail(e.target.value)}}/>
      <h5>Password</h5>
      <input type="password" placeholder='Password' value = {password} onChange = {(e) =>{setPassword(e.target.value)}}/>
      <button type='Submit' className='btn' onClick={login} >Sign In</button>
      <button type='Submit' onClick={register}>Create New Account</button>
      </div>
    </div>
  )
}

export default Login