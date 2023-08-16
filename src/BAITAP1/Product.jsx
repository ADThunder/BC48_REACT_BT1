import React, { Component } from 'react'
import ItemProduct from './ItemProduct/ItemProduct'

export default class Product extends Component {
  render() {
    return (
      <div style={{paddingTop:"100px"}}>
        <div className="container px-5">
            <div className="row">
                <ItemProduct/>
            </div>
        </div>
      </div>
    )
  }
}
