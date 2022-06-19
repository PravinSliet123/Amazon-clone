import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Login.css"
import { auth } from '../firebase'
import user from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useStateValue } from '../StateProvider/Stateprovider'
function Login() {
    const navigate  = useNavigate()
    const [{}, dispatch] = useStateValue()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const singIn =e=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((userDetail)=>{
          if(userDetail)
          {

            navigate("/")
          }
        }).catch((error)=>{
            alert(error.message)
        })
         
    }
    const register = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userDetail)=>{
          if(userDetail)
          {
            navigate("/")
          }
        }).catch((error)=>{
            alert(error.message)
        })
       
    }
    return (
        <div className='login'>
            <NavLink to="/">
                <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" />
            </NavLink>
            <div className="login__caontainer">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input onChange={(e)=> setEmail(e.target.value)} value = {email} name = "Email" type="text" />
                    <h5>Password</h5>
                    <input onChange={(e) => setPassword(e.target.value)}  value = {password} name = "Password" type="password" />
                    <button type='submit' onClick={singIn} className='login__signinButton'>Sign In</button>
                </form>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste, nostrum a quasi reprehenderit quis aliquam eaque, aliquid architecto sint ducimus magni delectus consectetur </p>
                <button  onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login