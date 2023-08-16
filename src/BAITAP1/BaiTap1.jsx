import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import Product from './Product'

export default class BaiTap1 extends Component {
    render() {
        return (
            <div>
                <div className='bg-dark'>
                    <div className="container">
                        <Header />
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <Carousel/>
                </div>
                <Product/>
                <Footer/>
            </div>
        )
    }
}
