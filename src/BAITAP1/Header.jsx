import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='row py-3 align-items-center'>
                <div className="col-6">
                    <a href="123" style={{ textDecoration: "none" }}>
                        <h2 className='text-white mt-0'>Start Bootstrap</h2>
                    </a>
                </div>
                <div className="col-6 text-end">
                    <ul className='mb-0' style={{ listStyle: "none" }}>
                        <li className='d-inline me-3'><a className='text-white' style={{ textDecoration: "none" }} href="123">Home</a></li>
                        <li className='d-inline me-3'><a className='text-white' style={{ textDecoration: "none" }} href="123">About</a></li>
                        <li className='d-inline me-3'><a className='text-white' style={{ textDecoration: "none" }} href="123">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
