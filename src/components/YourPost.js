import React from 'react';
import Post from './Post';
import Card from './Card';
import Navbar from './Navbar';
import { useEffect,useState } from 'react';
import {useUserAuth} from '../context/AuthContext'
export default function YourPost(props) {

// const {name} = useStored();

const {sname,user,userpost,fetchUserData,fetchFireStore,fname} = useUserAuth();
// const {navd} = useStored();

//const[nav,setNav] = useState({ntog :'',nn :'Close'});


const[toggle,setToggle]=useState();
	const[count,setCount]=useState(0);
	const[notch,setNotch]=useState('Close');


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
const[userAccess,setUserAccess] = useState();
useEffect(() => {

	fetchUserData();

	fetchFireStore();

    setUserAccess("Valid")


}, [])


 
  return (
    <div>
        <div>
		
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

<div>
		</div>
	<div className="separator">
  		
	  <div className="container px-4 text-center">
  <div className="row gx-5">
    
      {userpost.map(u =>(
        <div className="col" key={u.id}>
        <Card userContent={u.content} userAccess={userAccess} postId={u.id} firstName={u.f_name}/>
        </div>
      ))}
  </div>
</div>
	  </div>
        </div>
        </div>
        <div>
		<Post/>
	  </div>
	</div>
    </div>
  )
}
