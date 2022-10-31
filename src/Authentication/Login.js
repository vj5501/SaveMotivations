import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import "./login.css"
import Signup from './Signup';
import { async } from '@firebase/util';

export default function Login() {

    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

   const handleChangeEmail =(event)=>
    {
        setEmail(event.target.value)
    }

    const handleChangePassword =(event)=>
    {
        setPassword(event.target.value)
    }

    const register =() =>
    {
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(auth=>{navigate("/home")})
        // .catch(error=>console.log(error))

        navigate("/signup")
    }

    const LogIn = () =>
    {
        signInWithEmailAndPassword(auth,email,password)
        .then(auth=>navigate("/home"))
        .catch(error=>alertMsg(error))
    }

    const alertMsg = (e)=>
    {
        if(email==="")
        {alert(e);}
        else {alert("Wrong Credentail");}
    }


    // const GoogleSignIn = () =>
    // {
        
    // }

  return (
    <div>
        <div className="login-page">
        <div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">SaveMotivation</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row head-s">
						<h2>LogIn</h2>
					</div>
					<div className="row">
							<div className="row">
								<input onChange={handleChangeEmail} type="email" className="form__input" placeholder="Email"/>
							</div>
							<div className="row">
								<input onChange={handleChangePassword} type="password" className="form__input" placeholder="Password"/>
							</div>
							<div className="row">
							</div>
							<div className="row">
                            <button className="btn" onClick={LogIn} >Login</button>
                            <button className='btn' onClick={register}>Register</button>
							</div>
					</div>
					{/* <div className="row">
                        <button className='btn' onClick={register}>Register</button>
					</div> */}
				</div>
			</div>
		</div>
	</div>
	<div className="container-fluid text-center footer">
		Coded with &hearts; by <a href="/">.</a>
	</div>
        {/* <div>
            <label>Email</label>
        <input onChange={handleChangeEmail} type="email" name="email"/>
        </div>
        <div>
            <label>Password</label>
        <input onChange={handleChangePassword} type="password" name="email"/>
        </div>
        <div>
        <button className="btn" onClick={LogIn} type="submit">Login</button>
        </div>
        <div>
            <button className="btn" onClick={register} >SignUp</button>
        </div>
        <div>
            <button className="btn" onClick={GoogleSignIn}></button>
        </div>
         */}
         
         </div>
    </div>
  )
}
