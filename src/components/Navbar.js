import React, { Component} from 'react'
import './Nav.css';
import { auth } from '../firebase';

// import Post from './Post';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

export default class Navbar extends Component {

	 

	constructor() {
		super();
		this.state = {
		  toggle: '',
		  count:0,
		  notch:'Close'
		};
	  }
  render() {
    //const[classToggle,setClassToggle] = useState('active')
	const  tog = () => {
		
		if(this.state.count===0)
		{
		 this.setState({toggle : 'active',count : 1,notch : 'Open'})
		}
		else{
			this.setState({toggle : '',count : 0,notch : 'Close'})
		}
	  }

	  
    return (
      <div>
       
	<div className={`vertical-nav bg-dark ${this.props.toggle}`} id="sidebar">
  		<div className="py-4 px-3 mb-4 bg-dark">   		
      		<div className="media-body">
        		<h4 className="font-weight-white text-muted mb-0">PROFILE</h4>
        		<p className="font-weight-grey text-muted mb-0">User Name</p>
      		</div>  		
  		</div>

  		<ul className="nav flex-column bg-dark mb-0">
    		<li className="nav-item">
      			<a href="/" className="nav-link text-light font-italic">
                	<i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
                		Home
            	</a>
    		</li>
    		<li className="nav-item">
      			<a href="/" className="nav-link text-light font-italic">
                	<i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                	Your Post
            	</a>
    		</li>
    		<li className="nav-item">
      			<a href="/" className="nav-link text-light font-italic">
                	<i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
                	Services
            	</a>
    		</li>
    		{/* <li className="nav-item">
      			<a href="/" className="nav-link text-dark font-italic">
                	<i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                	Gallery
            	</a>
    		</li> */}
  		</ul>

  		<p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Personal</p>

  			<ul className="nav flex-column bg-dark mb-0">
    			<li className="nav-item">
      				<a href="/" className="nav-link text-light font-italic">
                	<i className="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                		Edit Profile
            		</a>
    			</li>
				<li className="nav-item nav-out">
      				<a href="/" onClick={()=>auth.signOut()} className="nav-link text-light font-italic">
                	<i className="fa fa-bar-chart mr-3 text-danger fa-fw">Sign Out</i>
                		
            		</a>
    			</li>
  			</ul>
	</div>
	  
	  </div>
    )
  }
}
