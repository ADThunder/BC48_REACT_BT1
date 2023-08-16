import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
      <div className='container'>
        <div className="bg-light" style={{padding : "100px"}}>
            <h1 className='display-5 fw-bold'>A warm welcome!</h1>
            <p className='fw-light' style={{fontSize: "25px"}}>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className="btn btn-primary" style={{padding : "10px 20px", fontSize: "20px"}}>Call to action</button>
        </div>
      </div>
    )
  }
}
