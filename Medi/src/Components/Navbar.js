import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav">
                    <img
                        src="https://www.medipract.com/_next/static/media/medicpract_wide_logo.3d2a511c.svg"
                        alt="logo"
                    />
                    <div />
                    <div id="pick-address" className="pincode">
                        <div>
                            <img
                                src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg"
                                alt="pin-add"
                            />
                            <p>Express delivery</p>
                        </div>
                        <h4>360004 Rajkot</h4>
                        <i className="fa-solidfa-angle-down" />
                    </div>
                    <div className="download-app">
                        <i className="fas fas-moblie-alt" />
                        <p>Downlode App</p>
                    </div>
                    <ul>
                        <li id="open_login">
                            <i className="fa-regular fa-user" />
                            <p>Hello, log In</p>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-regular fa-percent" />
                                <p>Offers</p>
                            </a>
                        </li>
                        <li>
                            <i className=" fa-solid fa-cart-shopping" />
                            <p>Cart</p>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*navbar end*/}
            {/* search bar start*/}
            <div className="search-layout">
                <div className="search-header">
                    <h2>What are you looking for?</h2>
                </div>
                <div className="search-header" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <i className="fa-solid fa-clipboard-list" />
                    <p>Order with prescription</p>
                    <div>
                        <h3>UPLOAD NOW</h3>
                        <i className="fa-solid fa-angle-right" />
                    </div>
                </div>
                <div>
                    <form action="#" className="search-bar" id="searchForm">
                        <i className="fa-solid fa-magnifying-glass" />
                        <input
                            type="text"
                            name="searchQuery"
                            id="searchQuery"
                            placeholder="Search for medicine"
                        />
                        <input type="submit" defaultValue="Search" />
                    </form>
                </div>
            </div>
            {/*search bar end*/}
        </>
    )
}

export default Navbar