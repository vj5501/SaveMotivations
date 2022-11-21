import './Edit.css';
import React, { useEffect, useState } from 'react'
import { userAuthContext, useUserAuth } from '../context/AuthContext'
import { addDoc, collection, refEqual, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function EditProfile() {

const{sname,user,fetchFireStore,fetchUserData} = useUserAuth();

  const[firstName,setFirstName] = useState();
  const[lastName,setLastName] = useState();


  const[newFirst,setNewFirst] = useState();
  const[newLast,setNewLast] = useState();

useEffect(() => {

  const getUser= async() =>
  {
    await fetchFireStore();
  }

   getUser();

sname.map(u =>{
  if(user.email===u.data.email)
  {
    setFirstName(u.data.first_name);
    setLastName(u.data.last_name);
  }
})
  
}, [])

const updateUser = () =>
{
  const dataU = collection(db ,"user")
  sname.map(u=>{
    if(user.email===u.data.email)
    {
  addDoc(dataU,u.id, {
    first_name: newFirst,
    last_name: newLast,
  })

    }
  })
}

function handleChangeFirst(event)
{
  setNewFirst(event.target.value)
}

function handleChangeLast(event)
{
  setNewLast(event.target.value)
}

  return (
    <div>
   
  <div className='container'>
    <h3 className="input-box">Edit Profile</h3>
  <div className="input-box">
  <label className="form-label">First Name</label>
    <input type="text" class="form-control" aria-label="First name" placeholder={`${firstName}`} onChange={handleChangeFirst}/>
  </div>
  <div class="input-box">
  <label  className="form-label">Last Name</label>
    <input type="text" class="form-control"  placeholder={`${lastName}`} onChange={handleChangeLast} aria-label="Last name"/>
  </div>
  <div  class="input-box">
<button onClick={updateUser} className="btn btn-dark">Submit</button>
 </div>
  </div>
  
    </div>
  )
}
