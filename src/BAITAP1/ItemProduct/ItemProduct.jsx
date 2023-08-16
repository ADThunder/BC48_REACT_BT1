import React, { Component } from 'react'

export default class ItemProduct extends Component {
    arrItemProduct = [
        {
            image: "fa-solid fa-ethernet",
            title: "Fresh new layout",
            subTitle: "With Bootstrap 5, we've created a fresh new layout for this template!",
        },
        {
            image: "fa-solid fa-download",
            title: "Free to download",
            subTitle: "As always, Start Bootstrap has a powerful collectin of free templates.",
        },
        {
            image: "fa-solid fa-address-card",
            title: "Jumbotron hero header",
            subTitle: "The heroic part of this template is the jumbotron hero header!",
        },
        {
            image: "fa-brands fa-bootstrap",
            title: "Feature boxes",
            subTitle: "We've created some custom feature boxes using Bootstrap icons!",
        },
        {
            image: "fa-solid fa-code",
            title: "Simple clean code",
            subTitle: "We keep our dependencies up to date and squash bugs as they come!",
        },
        {
            image: "fa-solid fa-check",
            title: "A name you trust",
            subTitle: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
        },
    ]
    render() {
        return (
            <>
                {this.arrItemProduct.map((item, index) => {
                    const { image, title, subTitle } = item
                    return <div className="col-4 mb-5">
                        <div className="card bg-light text-center border-0 h-100">
                            <div className="card-body text-center p-4 pt-0">
                                <div className="bg-primary bg-gradient text-white rounded-3 mb-4" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "4rem", width: "4rem", fontSize: "2rem", marginTop:"-1.5rem"}}>
                                    <i className={image} />
                                </div>
                                <h2 className='fs-4 fw-bold pt-2'>{title}</h2>
                                <p className="mb-0 pb-5">{subTitle}</p>
                            </div>
                        </div>
                    </div>
                })}
            </>
        )
    }
}
