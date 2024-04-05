import React, { useEffect } from 'react'
import './Homepage.css';

const Homepage = () => {
    useEffect(() => {
        let bannerList = [
            {
                imgurl: "https://www.medipract.com/_next/image?url=https%3A%2F%2Fmercury.akamaized.net%2Fi%2F0d55ac5dba33e974c46a31fa50926b6a_240039_0.jpg&w=1920&q=75"
            },
            {
                imgurl: "https://www.medipract.com/_next/image?url=https%3A%2F%2Fmercury.akamaized.net%2Fi%2F3ca2854bf041f71ba54ac801da914141_70768_0.jpg&w=1920&q=75"
            },
            {
                imgurl: "https://www.medipract.com/_next/image?url=https%3A%2F%2Fmercury.akamaized.net%2Fi%2F8e70230e856a1504cf9cc0dc1b4ae7ce_70765_0.jpg&w=1920&q=75"
            },
            {
                imgurl: "https://onemg.gumlet.io/q_auto,f_auto,h_0,a_ignore,w_1062/yhvsjhnxry0bs3o7pdtb.jpg"
            },
        ];
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
                name: "Sugar Free Gold 500 Pellets With Free (Sugar Free Green 40gm Powder)",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/Z47706/sugar-free-gold-500-pellets-with-free-sugar-free-green-40gm-powder-1-1710330150.jpg?dim=1440x0",
                mrp: 297,
                discount: '1 % OFF',
            },
            {
                name: "Durex Real Feel Condoms Pack Of 10",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/L07650/durex-real-feel-condoms-pack-of-10-2-1685367850.jpg?dim=1440x0",
                mrp: 509,
                discount: '15 % OFF',
            },
            {
                name: "Fixderma Shadow 50+ Gel 75g",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/H17394/fixderma-shadow-50-gel-75g-2-1671743866.jpg?dim=1440x0",
                mrp: 593,
                discount: '5 % OFF',
            },
            {
                name: "Glucon D Regular Powder 450 G Free 50 G Box",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/P37415/glucon-d-regular-powder-450-g-free-50-g-box-2-1709381988.jpg?dim=1440x0",
                mrp: 135,
            },
            {
                name: "Vansaar 45+ Diab Balance Juice Bottle Of 1 Ltr",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/H82654/vansaar-45-diab-balance-juice-bottle-of-1-ltr-2-1698925291.jpg?dim=1440x0",
                mrp: 549,
            },
            {
                name: "Glenmark Elovera Cream For Protect, Nourish & Repair Skin Naturally, Tube Of 150g",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/K13490/glenmark-elovera-cream-for-protect-nourish-repair-skin-naturally-tube-of-150g-2-1698736770.jpg?dim=1440x0",
                mrp: 375,

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
            {
                name: "Pharmeasy Pill Box Organizer",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1690272738.jpg?dim=1440x0",
                mrp: 254,
                discount: ' 49% OFF',
            },
            {
                name: "Dr. Morepen Gluco One Bg 03 Glucometer Test Strips Box Of 50",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0",
                mrp: 602,
                discount: '29 % OFF',
            },
            {
                name: "Zincovit Strip Of 15 Tablets (Green)",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/188996/zincovit-strip-of-15-tablets-green-2-1702990444.jpg?dim=1440x0",
                mrp: 99,
                discount: '10 % OFF',
            },
            {
                name: "I-Pill Emergency Contraceptive Pill",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-emergency-contraceptive-pill-2-1672279640.jpg?dim=1440x0",
                mrp: 99,
                discount: '10 % OFF',
            },
            {
                name: "Accu-Chek Active Glucometer Test Strips Box Of 50",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1669655023.jpg?dim=1440x0",
                mrp: 984,
                discount: '14 % OFF',
            },
            {
                name: "Unwanted 72 Strip Of 1 Tablet",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/177755/unwanted-72-strip-of-1-tablet-2-1669655391.jpg?dim=1440x0",
                mrp: 90,
                discount: '18 % OFF',
            },
            {
                name: "Prega News Pregnancy Test Kit",
                imgurl: "https://cdn01.pharmeasy.in/dam/products_otc/226830/prega-news-pregnancy-test-kit-1-1669655006.jpg?dim=1440x0",
                mrp: 54,
                discount: '10 % OFF',
            },

        ];


        let bannerContainer = document.querySelector(".banner");
        createOfferList(bannerList, bannerContainer)

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
                    <p> MRP: <span>Rs ${el.mrp}</span></p >
                        <p>Discount: ${el.discount}</p>
                `;

                productCard.appendChild(image);
                productCard.appendChild(productName);
                productCard.appendChild(productPrice);

                container.appendChild(productCard);
            });
        }




        function createOfferList(list, container) {
            list.forEach(function (el) {
                let img = document.createElement("img");
                img.src = el.imgurl
                container.append(img);
            })
        }

        document.addEventListener("DOMContentLoaded", function () {
            const searchForm = document.getElementById("searchForm");
            searchForm.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent form submission

                // Get the search query
                const searchQuery = document.getElementById("searchQuery").value.trim();

                // Perform search
                search(searchQuery);
            });
        });

        function search(query) {
            // Here you can implement the logic to search for medicines based on the query
            // For example, you can make an AJAX request to a server to fetch search results
            // and then update the UI accordingly.
            console.log("Search query:", query);
            // Implement your search logic here
        }

    }, [])

    return (
        <>

            {/*nav card layout start*/}
            <div className="nav-card-layout">
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto
  "
                            alt=""
                        />
                        <h4>DIABETES</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto"
                            alt=""
                        />
                        <h4>HEART CARE</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto
  "
                            alt=""
                        />
                        <h4>STOMACH CARE</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto
  "
                            alt=""
                        />
                        <h4>MUSCLE CARE</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto
  "
                            alt=""
                        />
                        <h4>DERMA CARE</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto
  "
                            alt=""
                        />
                        <h4>KIDNEY CARE</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/8051e79c-6152-440e-b402-8d1ba8d7c82e.png?format=auto
  "
                            alt=""
                        />
                        <h4>RESPIRATORY CARE</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto
  "
                            alt=""
                        />
                        <h4>LIVE CARE</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png?format=auto
  "
                            alt=""
                        />
                        <h4>EYE CARE</h4>
                    </div>
                </div>
            </div>
            {/*nav card layout end*/}
            {/*banner start*/}
            <div className="banner" />
            {/*bannser end*/}
            {/*new offer list start*/}
            <div className="new-user-offer container2">
                <h1 className="title">offer just for you</h1>
                <div className="nav-card-layout">
                    <div>
                        <div>
                            <img
                                src="https://cms-contents.pharmeasy.in/offer/60165886431-ten_per.jpg?w=64&q="
                                alt=""
                            />
                            <p>Flat 10% off</p>
                        </div>
                        <div>
                            <img
                                src="https://cms-contents.pharmeasy.in/offer/7f98176928d-OFFER25-compressed.jpg?w=64&q=75"
                                alt=""
                            />
                            <p>Flat 25% off</p>
                        </div>
                        <div>
                            <i className="fa-soid fa-lock" />
                            <p>Log in to view morre offers</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*new offer list end*/}
            {/*shop categaries start*/}
            <div className="shop-categoriees container2">
                <h1 className="title">Shop by categaries</h1>
                <div className="product-container">
                    <div className="product-item">
                        <div>
                            <img
                                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=256x0"
                                alt=""
                            />
                            <h4>Top products</h4>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Elderly care</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Personal care</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Healthcare devices</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Health food and drinks</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ce48d6d71ace3892945f0b0a64c1f0e9.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Skin care</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/11315fee93053980af48fd871bf687b8.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Mother and baby care</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4405b7900b0b34fcb5c8572aae9d4b2e.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Accessories &amp; Wearables</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Fitness supplements</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Ayurvedic care</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af7a9b53ad1239659615c6895b0972d7.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Sexual wellness</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/bde7d1752b5e3cd69f42157f4d578535.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Mage clearance sale</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Diabetic care</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/35d6d4e00e5d3058906cfa8b92ca799c.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Health condition</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3b0faedee18735768d7b7a04f6007731?f=jpg?dim=256x0"
                            alt=""
                        />
                        <h4>Sexual wellness</h4>
                    </div>
                    <div>
                        <img
                            src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ef15f03b682d37c994eb978d6c85c455.png?f=png?dim=256x0"
                            alt=""
                        />
                        <h4>Trending products</h4>
                    </div>
                </div>
            </div>
            {/*shop categaries end*/}
            {/*order with prescription start*/}
            <div className="Order-with-prescription">
                <div>
                    <img
                        src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
                        alt=""
                    />
                    <div>
                        <h3>Order with prescription</h3>
                        <p>upload prescription and we will deliver your medicine</p>
                        <button>
                            <i className="fa-solid fa-paperclip" />
                            upload
                        </button>
                    </div>
                </div>
                <div>
                    <h4>How does this works ?</h4>
                    <div>
                        <div>
                            <h3>1</h3>
                            <p>upload photo of you prescription</p>
                        </div>
                        <div>
                            <h3>2</h3>
                            <p>Add delivery address and place the order</p>
                        </div>
                        <div>
                            <h3>3</h3>
                            <p>We will call you to confirm the medicines</p>
                        </div>
                        <div>
                            <h3>4</h3>
                            <p>
                                Now, sit bcck! your medicines will get delivered at your doorstep
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*order with prescription end*/}
            {/*new launches start*/}
            <div className="new-launches container2">
                <div className="title">New launches</div>
                <div className="subtitle">New wellness range just for you!</div>
                <div className="product-cards" />
            </div>
            {/*new launches end*/}
            {/*trending start*/}
            <div className="trending container2">
                <div className="title">Trending near your</div>
                <div className="subtitle">Popular in your city</div>
                <div className="product-cards" />
            </div>
            {/*trending end*/}
            {/*Ayurveda start*/}
            <div className="Ayurveda-card-layout">
                <h1 div="" className="title">
                    Ayurveda top brands
                </h1>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/image/upload/v1627648261/onneibznnitqsn5twumi.png?format=auto"
                            alt=""
                        />
                        <h3>Daber</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/image/upload/v1627648303/dekl61bd9thu21vmypkm.png?format=auto"
                            alt=""
                        />
                        <h3>Baidyanath</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/image/upload/v1627648345/idgjl700nkz6w8lzvjwc.png?format=auto"
                            alt=""
                        />
                        <h3>Dhootapapeshwar</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/image/upload/v1627648428/xemgonnppssxvagkjxzd.png?format=auto"
                            alt=""
                        />
                        <h3>Himalaya</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/image/upload/v1630927780/guiy84rk41kgofd5atft.png?format=auto"
                            alt=""
                        />
                        <h3>Jiva</h3>
                    </div>
                </div>
            </div>
            {/*Ayurveda end*/}
            {/*Featured brands start*/}
            <div className="Featured brands-card-layout">
                <h1 div="" className="title">
                    Featured brands
                </h1>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/diagnostics%2F2024-03%2F1711608875_Glucon+D.png?format=auto"
                            alt=""
                        />
                        <h3>Glucon-D</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/diagnostics%2F2024-03%2F1711608887_Dr.+vaid.png?format=auto"
                            alt=""
                        />
                        <h3>Dr-vaid</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/diagnostics%2F2024-03%2F1711608895_Accu+Chek.png?format=auto"
                            alt=""
                        />
                        <h3>Accu+chek</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/diagnostics%2F2024-03%2F1711608912_Cetaphil.png?format=auto"
                            alt=""
                        />
                        <h3>Cetaphil</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="https://onemg.gumlet.io/diagnostics%2F2024-03%2F1711608922_Dabur.png?format=auto"
                            alt=""
                        />
                        <h3>Dabur</h3>
                    </div>
                </div>
            </div>
            {/*Featured brands end*/}
            {/*javascript.file*/}
            {/*  */}
        </>
    )
}

export default Homepage
