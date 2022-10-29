import React, { Component} from 'react'
//import Card from './Card'
import './Nav.css';
import './Popup.css';

export default class Post extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            activate : null,
            value : 'Nothing'
            
        }

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value })
    }

    handleSubmit(){
        alert("Motivation is Posted");
        
    }

  render() {

    const popup = () =>
    {
        if(this.state.activate===null)
        this.setState({activate:'is-visible'});
        else
        this.setState({activate:null});
    }

    
        return (
      <div>
        <div className='container'>
            <button id="btnOpenForm" className='btn btn-dark bg-set rounded-pill shadow-sm btn-lg align-button' onClick={popup}>Post</button>
        </div>

        <div className={`form-popup-bg ${this.state.activate}`}>
  <div className={`form-container`}>
    <i id="btnCloseForm" className="close-button" onClick={popup}>X</i>
    <h3>Your Motivation</h3>
    
    <form onSubmit={this.handleSubmit}>
    <div class="mb-3">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <input onChange={this.handleChange} type="text" class="form-control bg-dark text-light fs-5" id="exampleFormControlTextarea1" rows="3" name="quote" value={this.state.value} placeholder="Type you're Motivation ... " style={{height:'150px'}}/>
</div>
      <button className="btn btn-light" style={{backgroundColor:'#2d4268',color:'white'}} type="submit">Submit</button>
    </form>
  </div>
</div>

{/* <div style={{display:'hidden'}}>
<Card cat={this.state.value}/>
</div> */}

{/* <Card cat={this.state.value}/> */}

      </div>
    )
  }
}
