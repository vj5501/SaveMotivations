import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';


export default function Signup() {

    const[passT,setType] = useState("password");

    const navigate = useNavigate();

    const togglePass = () =>
    {
        if(passT==="password")
        {
            setType("text")
        }
        else
        {
            setType("password")
        }
    }



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

    const registered = () =>
    {
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth=>{navigate("/login")})
        .catch(error=>console.log(error))

    }
  return (
    <div>
        <div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Save-Motivation</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row head-s">
						<h2>Sign UP</h2>
					</div>
					<div className="row">
							<div className="row">
								<input type="text" className="form__input" placeholder="First Name"/>
                                <input type="text" className="form__input" placeholder="Last Name"/>
							</div>
                            <div className="row">
                                <input type="email" onChange={handleChangeEmail}  className="form__input" placeholder="Email Address"/>
							</div>
							<div className="row">
								<input type="password" onChange={handleChangePassword}  className="form__input" placeholder="Password"/>
                                <input type={passT} className="form__input" placeholder="Re-Enter Password"/>
                                <input onClick={togglePass} type="checkbox" className='check-box' value="Check"/> Show Pass
                            </div>
							<div className="row">
								<button onClick={registered} type="submit" className="btn">Sign Up</button>
							</div>
					</div>
					<div className="row">
						 <Link to="/" className='link-log'><i>Log In</i></Link>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
