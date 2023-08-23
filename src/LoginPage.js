import React, { useState } from "react";
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
const LoginPage =()=>{
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const navigate = useNavigate();
const credentials=[{username:'Ashok',password:'12345'},{username:'Vikas',password:'123456'},{username:'ash',password:'123'}]
const handleLogin=()=>{
   const matched = credentials.find((i)=>i.username===username && i.password===password);
   if(matched){
   navigate('/order-management')
   }
   else{
    alert('Wrong credentials')
   }
}
return(
    <div className="login">
    <div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={()=>handleLogin()}>login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
</div>
)
}
export default LoginPage;