import React, { useEffect } from 'react'
import './Addcart.css';

const Addcart = () => {
    useEffect(() => {
        let newLaunchesList = [
            {
                name: "Pharmeasy Multivitamin + Calcium Combo - Complete Nutrition - Bottles Of 60 Each",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/U52681/pharmeasy-multivitamin-and-pharmeasy-calcium-magnesium-vitamin-d3-tablets-pack-of-260-combo-pack-6.1-1708504260.jpg?dim=1440x0",
                mrp: 658,
                discount: '45 % OFF',
            },
            {
                name: "Whisper Thick Bindazzz Nights Xxxl (400mm) 20 Sanitary Pads",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/B80408/whisper-thick-bindazzz-nights-xxxl-400mm-20-sanitary-pads-2-1706007247.jpg?dim=1440x0",
                mrp: 436,
                discount: '34 % OFF',
            },
            {
                name: "Pharmeasy Men'S Diabetic & Orthopedic Slippers - Royal Blue- Size Uk 10",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/E90649/pharmeasy-womens-diabetic-orthopedic-slippers-coal-black-size-uk-7-6.1-1709287872.jpg?dim=1440x0",
                mrp: 545,
                discount: '48 % OFF',
            },
            {
                name: "Baidyanath Nagpur Ashwagandha Tablet - 60 Tablets, Immunity And Strength",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/U16920/baidyanath-nagpur-ashwagandha-tablet-60-tablets-immunity-and-strength-2-1677243413.jpg?dim=1440x0",
                mrp: 178,
                discount: '1 % OFF',
            },
            {
                name: "Similac Plus Infant Formula With Added Hmo & Dha/Lutein/Fos Stage 1 400gm Tin (Upto 6 Months)",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/G50110/similac-plus-infant-formula-with-added-hmo-dha-lutein-fos-stage-1-400gm-tin-upto-6-months-2-1703323331.jpg?dim=1440x0",
                mrp: 945,
                discount: '1 % OFF',
            },
            {
                name: "Prega News Pregnancy Test Kit",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/226830/prega-news-pregnancy-test-kit-1-1669655006.jpg?dim=1440x0",
                mrp: 54,
                discount: '10 % OFF',
            },


        ];
        let trendingprodList = [
            {
                name: "Liveasy Wellness Calcium Magnesium Vitami n D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=1440x0",
                mrp: 347,
                discount: '42 % OFF',
            },
            {
                name: "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1698385993.jpg?dim=1440x0",
                mrp: 207,
                discount: '8 % OFF',
            },
            {
                name: "Shelcal 500mg Strip Of 15 Tablets",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1440x0",
                mrp: 132,
                discount: '8 % OFF',
            },
            {
                name: "Evion 400mg Strip Of 20 Capsule",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1440x0",
                mrp: 72,
                discount: '8 % OFF',
            },
            {
                name: "Liveasy Foods Healthy Roasted Seed Mix - Blend Of 6 Fibre Rich Healthy Roasted Seeds - 200 Gms",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg?dim=1440x0",
                mrp: 199,
                discount: '50 % OFF',
            },
            {
                name: "Supradyn Daily Multivitamin With Essential Zinc, Vitamins, For Immunity & Energy Strip Of 15 Tablets",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablet-with-essential-zinc-vitamins-for-daily-immunity-energy-2-1677155713.jpg?dim=1440x0",
                mrp: 54,
                discount: '10 % OFF',
            },

        ];


        let newLaunchesContainer = document.querySelector(".new-launches   .product-cards");
        createProductList(newLaunchesList, newLaunchesContainer);

        let treandingContainer = document.querySelector(".trending  .product-cards");
        createProductList(trendingprodList, treandingContainer);

        function createProductList(list, container) {
            list.forEach(function (el) {
                let productCard = document.createElement("div");
                productCard.classList.add("product-card");

                let image = document.createElement("img");
                image.src = el.imgurl;
                image.alt = el.name;

                let productName = document.createElement("div");
                productName.classList.add("product-name");
                productName.textContent = el.name;

                let productPrice = document.createElement("div");
                productPrice.classList.add("product-price");
                productPrice.innerHTML = `
                    <p>MRP: <span>Rs ${el.mrp}</span></p>
                    <p>Discount: ${el.discount}</p>
                `;

                productCard.appendChild(image);
                productCard.appendChild(productName);
                productCard.appendChild(productPrice);

                container.appendChild(productCard);
            });
        }


    }, [])

    return (
        <>
            <div className="row">
                <div className="col-8 d-flex flex-column">
                    <div className="cart-item">
                        <div className="d-flex flex-row">
                            <img
                                className=" d-flex img-fiuid"
                                src="https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1440x0"
                                alt=""
                            />
                            <div className="col-4">
                                <h5>Evion 400mg Strip Of 20 Capsule</h5>
                                <h6>Visit EVLON Store</h6>
                                <p>$72.66</p>
                            </div>
                            <div className="col-2">
                                quatity
                                <select name="" id="">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={1}>4</option>
                                    <option value={1}>5</option>
                                    <option value={1}>6</option>
                                    <option value={1}>7</option>
                                    <option value={1}>8</option>
                                    <option value={1}>9</option>
                                    <option value={1}>10</option>
                                </select>
                            </div>
                            <div className="col-5 d-flex justify-content-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-x-circle"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item p-3">
                        <div className="d-flex flex-row">
                            <img
                                className=" d-flex img-fiuid"
                                src="https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1440x0"
                                alt=""
                            />
                            <div className="col-4">
                                <h5>Evion 400mg Strip Of 20 Capsule</h5>
                                <h6>Visit EVLON Store</h6>
                                <p>72.66</p>
                            </div>
                            <div className="col-2">
                                quatity
                                <select name="" id="">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={1}>4</option>
                                    <option value={1}>5</option>
                                    <option value={1}>6</option>
                                    <option value={1}>7</option>
                                    <option value={1}>8</option>
                                    <option value={1}>9</option>
                                    <option value={1}>10</option>
                                </select>
                            </div>
                            <div className="col-5 d-flex justify-content-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-x-circle"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item p-3">
                        <div className="d-flex flex-row">
                            <img
                                className=" d-flex img-fiuid"
                                src="https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1440x0"
                                alt=""
                            />
                            <div className="col-4">
                                <h5>Evion 400mg Strip Of 20 Capsule</h5>
                                <h6>Visit EVLON Store</h6>
                                <p>$72.66</p>
                            </div>
                            <div className="col-2">
                                quatity
                                <select name="" id="">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={1}>4</option>
                                    <option value={1}>5</option>
                                    <option value={1}>6</option>
                                    <option value={1}>7</option>
                                    <option value={1}>8</option>
                                    <option value={1}>9</option>
                                    <option value={1}>10</option>
                                </select>
                            </div>
                            <div className="col-5 d-flex justify-content-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-x-circle"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 ml-5 Order">
                    <div>
                        <h4>Order Total</h4>
                        <div className="d-flex flex-row py-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="promo code"
                            />
                            <button className="btn btn-primary">Apply</button>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <span className="billing-item">items</span>
                            <span className="billing-cost">$100</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <span className="billing-item">Shipping</span>
                            <span className="billing-cost">$10</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <span className="billing-item">Discount</span>
                            <span className="billing-cost">$10</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <span className="billing-item fs-5">Total</span>
                            <span className="billing-cost fs-5">$100</span>
                        </div>
                        <div className="d-flex m-3">
                            <button className="btn btn-primary flex-grow-1">Pay Now</button>
                        </div>
                    </div>
                    <h4>Offer Cart</h4>
                    <div className="d-flex flex-row py-2">
                        <div className="offer-item">
                            <img
                                src="https://img.freepik.com/premium-vector/special-offer-discounts-20-percent-off_573652-2636.jpg?w=1060"
                                alt="Offer Image"
                            />
                            <div className="offer-details">
                                <h2>Product Name</h2>
                                <p>Description of the product goes here.</p>
                                <p>Discount: 20% off</p>
                            </div>
                            <div className="offer-price">
                                $80.00 <span className="original-price">$100.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row p-2">
                        <div className="offer-item">
                            <img
                                src="https://zeevector.com/wp-content/uploads/10-Percent-Discount-PNG.png"
                                alt="Offer Image"
                            />
                            <div className="offer-details">
                                <h2>Another Product</h2>
                                <p>Description of another product goes here.</p>
                                <p>Discount: $10 off</p>
                            </div>
                            <div className="offer-price">
                                $50.00 <span className="original-price">$60.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*add cart end*/}
            {/*new launches start*/}
            <div className="new-launches">
                <div className="product-cards" />
            </div>
            {/*new launches end*/}
            {/*trending start*/}
            <div className="trending ">
                <div className="product-cards" />
            </div>
            {/*trending end*/}
            {/*javascript.file*/}
            {/*  */}
        </>

    )
}

export default Addcart