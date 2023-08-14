import React from 'react';
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">ChatBook</span>
            <span className="title">Register </span>
            <form >
                <input type="text" placeholder='Enter Name' />
                <input type="email" placeholder='Enter Your Email'/>
                <input type="password" placeholder='Enter your password' />
                <input style={{display:"none"}} type="file"id='file' />
                <label htmlFor="file"> <img src={Add} alt="" />
                <span>Add an Avatar</span>
                </label>
                <button>SignUp</button>
            </form>
            <p>Already Have an Account? LogIn </p>
        </div>
    </div>
  )
}

export default Register