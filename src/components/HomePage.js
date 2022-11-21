import Card from './Card'
import Navbar from './Navbar'
import Post from './Post'
import './Card.css'
import React, { useContext, useEffect } from 'react'
// import { usersCollectionRef } from '../Authentication/Signup'
import { useState } from 'react'
import { useUserAuth } from '../context/AuthContext'

//import { async } from '@firebase/util'


export default function HomePage() {

	const{user,fetchFireStore,sname,navContent,fetchAllPostData,allpostData,fname} = useUserAuth();

	// const {navContent} = useStored();
	// const{userPost,userData} = useStored;

	//const[userPost,userData] = useState([]);
	const[userName,setUserName] = useState();
	const[toggle,setToggle]=useState();
	const[count,setCount]=useState(0);
	const[notch,setNotch]=useState('Close');
	// const[post ,setPost]=useState([]);
	// const[welMsg,setWelMsg]=useState(null);
    // const[fn,setFirstName] = useState([]);
	
	const togMode = "Public";

useEffect(() => {
	
	 //function is define in context/AuthContext
     fetchFireStore();	 
	 navContent(toggle,notch);

	 fetchAllPostData();


	 

}, [])



// function fetchFireStore()
// {
// 	const data = collection(db,'user');
// 	  getDocs(data).then(res => {

// 		const userData = res.docs.map(doc => ({
// 			data : doc.data(),
// 			id : doc.id
// 		}))
// 		setFirstName(userData)
// 		firstName(userData)
		
// 	}).catch(error => console.log(error.message))
		
// 	// const postData = doc(db,'user','post');
// 	//   getDocs(postData).then(res => {

// 	// 	const postGet = res.docs.map(doc => ({
// 	// 		data : doc.data(),
// 	// 		id : doc.id
// 	// 	}))
// 	// }).catch(error => console.log(error.message))
		

// }

const nameSet =()=>
{
	sname.map((ele)=>
	{
		if(user.email===ele.data.email)
		setUserName(ele.data.first_name)
	})

}

// const fetch = async() =>
// {
// 		usersCollectionRef.onSnapshot((q) => {
// 			const saveData =[];
// 			q.forEach((doc) => {
// 				saveData.push(doc.data());
// 			})
// 			setFirstName(saveData);
// 		})
// 		//  ((doc) => {
// 		// setFirstName({...doc.data(),id:doc.id});
// 		//  })	
// }


	const  tog = () => {
		
		if(count===0)
		{
		 setToggle('active');
		 setCount(1);
		 setNotch('Open');
		}
		else{
			
			setToggle('');
		 setCount(0);
		 setNotch('Close');
		}

	  }



  return (
	<div>
		{/* <div className={`welcome-container ${welMsg}`}>
			<p>Welcome {userName}</p>
		</div> */}
{sname.map(u => (
	<div key={u.id}>{u.data.email===user.email && 
		<Navbar toggle={toggle} emailId={u.data.first_name}/>
	}
		</div>
		)
		)}
         <div className={`page-content p-5 ${toggle}`} id="content">
  		<button onClick={tog} id="sidebarCollapse" className="btn btn-dark rounded-pill shadow-sm px-4 mb-4" ><i className="fa fa-bars mr-2"></i><small className="text-uppercase font-weight-bold">{notch}</small></button>
  	
        <div>
        <h2 className="display-4 text-white">QUOTES </h2>
  		<p className="lead text-white mb-0"></p> 		
{
	// allpost.map(u=>(
	// 	<p></p>
	// ))
}
<div>
		
		</div>
	<div className="separator">
  		
	  <div className="container px-4 text-center">
  <div className="row gx-5">
    {allpostData.map(u => (
				<div className='col-6' key={u.id}>
				<Card userContent={u.content} postId={u.id} firstName={u.f_name}/>
				</div>
         	))	
		}
  </div>
</div>
	  </div>
        </div>
        </div>
        <div>
		<Post/>
	  </div>
	</div>
  )
}

