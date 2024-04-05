import React, { useEffect } from 'react'
import './Product.css';

const Product = () => {
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
            {/*product start*/}
            <div className=" mb-5 ">
                <div className="row d-flex flex-row">
                    <div className="col-3  product-image ">
                        <img
                            className="img-fluid"
                            src="https://cdn01.pharmeasy.in/dam/products_otc/B80408/whisper-thick-bindazzz-nights-xxxl-400mm-20-sanitary-pads-2-1706007247.jpg?dim=700x0&dpr=1&q=100"
                            alt=""
                        />
                        <div className="product-small">
                            <img
                                className="img-fluid"
                                src=" https://cdn01.pharmeasy.in/dam/products_otc/B80408/whisper-thick-bindazzz-nights-xxxl-400mm-20-sanitary-pads-6.3-1706007152.jpg"
                                alt=""
                            />
                            <img
                                className="img-fluid"
                                src="https://cdn01.pharmeasy.in/dam/products_otc/B80408/whisper-thick-bindazzz-nights-xxxl-400mm-20-sanitary-pads-6.2-1706007330.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-6 ">
                        <h6>Visit WHLSPER Store</h6>
                        <h2>Whisper Thick Bindazzz Nights Xxxl (400mm) 20 Sanitary Pads</h2>
                        <div style={{ display: "flex" }}>
                            <h5>
                                <div style={{ color: "black" }}> 654.4$ MRP:660</div>
                                <div style={{ color: "red" }}>1%off</div>
                            </h5>
                        </div>
                        <div>
                            Product Details
                            <li>Brand: Whisper</li>
                            <li>Expires on or After: 30/12/2025</li>
                            <li> Country of Origin :China</li>
                            <li>
                                PROCTER &amp; GAMBLE HOME PRODUCTS PRIVATE LIMITED KNH ENTERPRISE
                                (SHANGHAI) CO LTD, NO 5619, WAI QING SONG RD, QING PU TOWN SHANGHAI
                                201707 CHINA
                            </li>
                        </div>
                        <button className="btn btn-primary ">Add cart</button>
                    </div>
                    <div className="col-3">
                        <h3>Items in Cart</h3>
                        <button className="btn btn-primary">View cart</button>
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
            </div>
            {/*product end*/}
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

export default Product