import React from 'react'
import { Component } from 'react'
import "./Nav.css"

export default class Card extends Component {
  render()
  {
    console.log(this.props.cat)
  return (
    <div>
        <div className="card border-dark mb-3 bg-adjust" style={{maxWidth:"21rem"}}>
  <div className="card-header"><h5>Name</h5></div>
  <div className="card-body text-light">
    
  <i className="fa fa-th-large mr-3 text-primary fa-fw">"</i><h5 className="card-title">Quote{this.props.cat}</h5><i className="fa fa-th-large mr-3 text-primary fa-fw">"</i>
    
  </div>
</div>
    </div>
  )
}
}
