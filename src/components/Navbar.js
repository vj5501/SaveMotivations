import React, { Component} from 'react'
import Card from './Card';
import './Nav.css';

export default class Navbar extends Component {

	 

	constructor() {
		super();
		this.state = {
		  toggle: '',
		  count:0,
		  notch:'Close Menu'
		};
	  }
  render() {
    //const[classToggle,setClassToggle] = useState('active')
	const  tog = () => {
		
		if(this.state.count===0)
		{
		 this.setState({toggle : 'active',count : 1,notch : 'Open Menu'})
		}
		else{
			this.setState({toggle : '',count : 0,notch : 'Close Menu'})
		}
	  }
    return (
      <div>
       
	<div className={`vertical-nav bg-dark ${this.state.toggle}`} id="sidebar">
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
  			</ul>
	</div>

	<div className={`page-content p-5 ${this.state.toggle}`} id="content">
  		<button onClick={tog} id="sidebarCollapse" type="button" className="btn btn-dark bg-dark rounded-pill shadow-sm px-4 mb-4" ><i className="fa fa-bars mr-2"></i><small className="text-uppercase font-weight-bold">{this.state.notch}</small></button>
  	<h2 className="display-4 text-white">QUOTES</h2>
  		{/* <p className="lead text-white mb-0">Build a fixed sidebar using Bootstrap 4 vertical navigation and media objects.</p> 		 */}
  	<div className="separator">
  		
	  <div className="container px-4 text-center">
  <div className="row gx-5">
    <div className="col">
		<Card/>
    </div>
    <div className="col">
		<Card/>
    </div>
  </div>
</div>
	  </div>

	  </div>
	  </div>
    )
  }
}
