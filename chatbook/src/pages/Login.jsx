import React from 'react';


const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">ChatBook</span>
            <span className="title">Log In </span>
            <form >
                <input type="email" placeholder='Enter Your Email'/>
                <input type="password" placeholder='Enter your password' />
                <input style={{display:"none"}} type="file"id='file' />
                
                <button>Log In</button>
            </form>
            <p>Create a new  Account? Sign Up </p>
        </div>
    </div>
  )
}

export default Login