import React from 'react'
import { Component } from 'react'

export default class Card extends Component {
  render()
  {
    console.log(this.props.cat)
  return (
    <div>
        <div className="card border-secondary mb-3 ms-5" style={{maxWidth:"21rem"}}>
  <div className="card-header text-secondary">Name</div>
  <div className="card-body text-secondary">
    
  <i className="fa fa-th-large mr-3 text-primary fa-fw">"</i><h5 className="card-title">Quote{this.props.cat}</h5><i className="fa fa-th-large mr-3 text-primary fa-fw">"</i>
    
  </div>
</div>
    </div>
  )
}
}
