import Card from './Card'
import Navbar from './Navbar'
import Post from './Post'
import './Nav.css'

import React, { Component } from 'react'

export default class HomePage extends Component {

    constructor() {
		super();
		this.state = {
		  toggle: '',
		  count:0,
		  notch:'Close'
		};
	  }

  render() {
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
         <Navbar toggle={this.state.toggle} />
         <div className={`page-content p-5 ${this.state.toggle}`} id="content">
  		<button onClick={tog} id="sidebarCollapse" className="btn btn-dark rounded-pill shadow-sm px-4 mb-4" ><i className="fa fa-bars mr-2"></i><small className="text-uppercase font-weight-bold">{this.state.notch}</small></button>
  	
        <div>
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
        <div>
		<Post/>
	  </div>
        </div>
    )
  }
}
