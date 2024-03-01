import React, { useState } from 'react'
import './CSS/Loginsignup.css'

const LoginSignup = () => {

  const [state,setState] =useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    confirmPassword: "",
    email:"",
    agree:false
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const checkboxChangeHandler = () => {
    setFormData({ ...formData, agree: !formData.agree });
  }

  

  const login = async () =>{
    console.log("Login Fuction Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async ()=>{
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    if (!formData.agree) {
      alert("Please agree to the terms of use & privacy policy");
      return;
    }
    console.log("Signup Fuction Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          {state === "Sign Up" ? <input name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} type="password" placeholder='Confirm Password' /> : <></>}
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up"
          ? <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login Here </span></p>
          : <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here </span></p>}
        <div className="loginsignup-agree">
        <input type="checkbox" name="agree" id="agreeCheckbox" checked={formData.agree} onChange={checkboxChangeHandler} />
          <label htmlFor="agreeCheckbox">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup