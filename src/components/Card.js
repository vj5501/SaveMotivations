import React, { useState } from 'react'
import { Component } from 'react'
import "./Nav.css";
import "./Card.css";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useUserAuth } from '../context/AuthContext';

export default function Card(props)
  {
    const{user,sname,fetchUserData} = useUserAuth();
    const[popToggle,setPopToggle] = useState("")
    function myFunction()
    {
      
      if(popToggle==="")
      {
        setPopToggle("show");
      }
      else{
        setPopToggle("");
      }
        // var popup = document.getElementById("myPopup");
        // popup.classList.toggle("show");
      
    }

    function deletePost()
    {
      sname.map(u=>{
        if(user.email===u.data.email)
        {
          deleteDoc(doc(db,"user",u.id,"post",props.postId))
          .then(fetchUserData())

        }
      })
    }
  return (
    <div>
        <div className="card border-dark mb-3 bg-adjust" >
  <div className="card-header"><h5 style={{maxWidth:"90rem"}}>{props.firstName}

  {props.userAccess==="Valid" && <div className={`popup card-menu`} onClick={myFunction}><svg className='' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
  <spam className={`popuptext ${popToggle}`} id="myPopup" onClick={deletePost}>Delete</spam>
</div>}
</h5>
  </div>
  <div className="card-body text-light">
    
  <i className="fa fa-th-large mr-3 text-secondary fa-fw">"</i><h5 className="card-title">{props.userContent}</h5><i className="fa fa-th-large mr-3 text-primary fa-fw">"</i>
    
  </div>
</div>
    </div>
  )
}

