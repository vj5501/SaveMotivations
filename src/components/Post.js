import { async } from '@firebase/util';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState} from 'react'
import {  useUserAuth } from '../context/AuthContext';
import { db } from '../firebase';
//import Card from './Card'
import './Nav.css';
import './Popup.css';


    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         activate : null,
    //         value : 'Nothing'
            
    //     }

    //     this.handleChange = this.handleChange.bind(this);

    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // const usersCollectionRef = collection(db ,"user")


export default function  Post () {
  
const[value,setValue] = useState("Nothing");
const[activate,setActivate] = useState(null);

const[togMode,setTogMode] = useState("Public")

const{user,sname,fetchUserData} = useUserAuth();

  function handleChange(event){

    setValue(event.target.value)
}

function handleSubmit(){
  sname.map(async u => {
    if(user.email===u.data.email)
    {
      const docRef = doc(db, "user", u.id);
      const colRef = collection(docRef, "post")

      addDoc(colRef, {
        content : value,
        f_name : u.data.first_name,
        mode : togMode
       })
       .then(fetchUserData)
    }
  })

  popup();

}


    const popup = () =>
    {
        if(activate===null)
        setActivate("is-visible");
        else
        setActivate(null);
    }

    const toggleMode = ()=>
    {
      if(togMode==="Public")
      {
        setTogMode("Private");
      }
      else{
        setTogMode("Public");
      }
    }

    useEffect(() =>{
    })
    
        return (
      <div className='align-post'>
        <div className='container'>
            <button id="btnOpenForm" className='btn btn-dark bg-set rounded-pill shadow-sm btn-lg align-button post-btn' onClick={popup}>Post</button>
        </div>

        <div className={`form-popup-bg ${activate}`}>
  <div className={`form-container`}>
    <i id="btnCloseForm" className="close-button" onClick={popup}>X</i>
    <h3>Your Motivation</h3>
    
    
    <div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
  <input onChange={handleChange} type="text" className="form-control bg-dark text-light fs-5" id="exampleFormControlTextarea1" rows="3" value={value} placeholder="Type you're Motivation ... " style={{height:'150px'}}/>
</div>

{/*Toggle Button */}
     <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
      <label className="toggle-lable" for="flexSwitchCheckDefault">{togMode}</label>
      </div>

      <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-light" style={{backgroundColor:'#2d4268',color:'white'}} onChange={popup}>Submit</button>
 
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-secondary" id="exampleModalLabel">Conform Post</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-dark">
        {value}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>

{/* <div style={{display:'hidden'}}>
<Card cat={this.state.value}/>
</div> */}

{/* <Card cat={this.state.value}/> */}

      </div>
    )
  }


