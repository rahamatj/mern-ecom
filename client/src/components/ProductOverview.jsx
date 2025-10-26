import React from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

const ProductOverview = () => {
    const [showFilters, setShowFilters] = React.useState(false);
    const [showSearch, setShowSearch] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [startingSplicingIndex, setStartingSplicingIndex] = React.useState(0);
    const [endingSplicingIndex, setEndingSplicingIndex] = React.useState(16);

    // const API_URL = "http://localhost:3001";
    const API_URL = "https://mern-ecom-9jpw.onrender.com/";

    async function fetchProducts() {
        try {
            await axios.get(`${API_URL}/api/products/`)
                .then(res => {
                    const data = res.data.slice(1, 17);

                    setProducts([ ...data ]);
                })
                .catch(err => console.error(err));
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        fetchProducts();
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(data => {
                const filteredProducts = data.filter(product =>
                    product.name.toLowerCase().includes(query)
                );
                setProducts(filteredProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handleDefault = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {

                if (endingSplicingIndex < products.length + 1) {
                    setProducts(products.splice(startingSplicingIndex, endingSplicingIndex));
                } else {
                    console.error("No more products to load");
                }

                // Reset to default product list
                const sortedProducts = [...products].sort((a, b) => a._id.localeCompare(b._id));
                setProducts(sortedProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handlePopularity = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Sort products by popularity
                const sortedProducts = [...products].sort((a, b) => b.noOfSales - a.noOfSales);
                setProducts(sortedProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handleNewness = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Sort products by newness (assuming _id is a timestamp or similar)
                const sortedProducts = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setProducts(sortedProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handlePriceAsc = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Sort products by price ascending
                const sortedProducts = [...products].sort((a, b) => a.price - b.price);
                setProducts(sortedProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handlePriceDesc = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Sort products by price descending
                const sortedProducts = [...products].sort((a, b) => b.price - a.price);
                setProducts(sortedProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handlePriceZeroToFifty = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Filter products with price between $0 and $50
                const filteredProducts = products.filter(product => {
                    return product.price >= 0 && product.price <= 50
                });
                setProducts(filteredProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handlePriceFiftyToHundred = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Filter products with price between $50 and $100
                const filteredProducts = products.filter(product => {
                    return product.price > 50 && product.price <= 100
                });
                setProducts(filteredProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handlePriceHundredToHundredFifty = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Filter products with price between $100 and $150
                const filteredProducts = products.filter(product => product.price > 100 && product.price <= 150);
                setProducts(filteredProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handlePriceHundredFiftyToTwoHundred = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Filter products with price between $150 and $200
                const filteredProducts = products.filter(product => product.price > 150 && product.price <= 200);
                setProducts(filteredProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handlePriceAboveTwoHundred = (event) => {
        event.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Filter products with price above $200
                const filteredProducts = products.filter(product => product.price > 200);
                setProducts(filteredProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    }

    const handleColor = (e, color) => {
        e.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Filter products by color
                const filteredProducts = products.filter(product => {
                    return product.color.includes(color)
                });
                setProducts(filteredProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handleTag = (e, tag) => {
        e.preventDefault();

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(products => {
                // Filter products by tag
                const filteredProducts = products.filter(product => {
                    return product.tags.includes(tag)
                });
                setProducts(filteredProducts.splice(startingSplicingIndex, endingSplicingIndex));
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handleLoadMore = (e) => {
        e.preventDefault();

        const newStartingIndex = endingSplicingIndex;
        const newEndingIndex = endingSplicingIndex + 16;

        fetch(`${API_URL}/api/products`)
            .then(response => response.json())
            .then(data => {
                const moreProducts = data.slice(newStartingIndex, newEndingIndex);
                setProducts(prevProducts => [...prevProducts, ...moreProducts]);
                setStartingSplicingIndex(newStartingIndex);
                setEndingSplicingIndex(newEndingIndex);
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const [showModal, setShowModal] = React.useState(false);
    const [product, setProduct] = React.useState({});

    return (
        <>
            <section className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="p-b-10">
                        <h3 className="ltext-103 cl5">
                            Product Overview
                        </h3>
                    </div>

                    <div className="flex justify-end p-b-52">
                        <div className="flex-w flex-c-m m-tb-10">
                            <div
                                onClick={() => {
                                    setShowFilters(!showFilters);
                                    setShowSearch(false)
                                }}
                                className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter w-25">
                                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                                Filter
                            </div>

                            <div
                                onClick={() => {
                                    setShowSearch(!showSearch);
                                    setShowFilters(false)
                                }}
                                className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search w-25">
                                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                                Search
                            </div>
                        </div>

                        <div className="flex flex-col justify-content-end m-tb-10">
                            <div className={`panel-search w-full ml-5 p-t-0 ${showSearch ? '' : 'dis-none'}`}>
                                <div className="bor8 dis-flex p-l-15">
                                    <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                                        <i className="zmdi zmdi-search"></i>
                                    </button>

                                    <input onChange={handleSearch} className="mtext-107 cl2 size-114 plh2 p-r-15"
                                           type="text" name="search-product"
                                           placeholder="Search"/>
                                </div>
                            </div>
                        </div>

                        <div className={`panel-filter w-full p-t-10 ${showFilters ? '' : 'dis-none'}`}>
                            <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                                <div className="filter-col1 p-r-15 p-b-27">
                                    <div className="mtext-102 cl2 p-b-15">
                                        Sort By
                                    </div>

                                    <ul>
                                        <li className="p-b-6">
                                            <a onClick={handleDefault} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                Default
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a onClick={handlePopularity} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                Popularity
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a onClick={handleNewness} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                Newness
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a onClick={handlePriceAsc} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                Price: Low to High
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a onClick={handlePriceDesc} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                Price: High to Low
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="filter-col2 p-r-15 p-b-27">
                                    <div className="mtext-102 cl2 p-b-15">
                                        Price
                                    </div>

                                    <ul>
                                        <li className="p-b-6">
                                            <a onClick={handleDefault} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                All
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a onClick={handlePriceZeroToFifty} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                $0.00 - $50.00
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a onClick={handlePriceFiftyToHundred} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                $50.00 - $100.00
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a onClick={handlePriceHundredToHundredFifty} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                $100.00 - $150.00
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a onClick={handlePriceHundredFiftyToTwoHundred} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                $150.00 - $200.00
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a onClick={handlePriceAboveTwoHundred} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                $200.00+
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="filter-col3 p-r-15 p-b-27">
                                    <div className="mtext-102 cl2 p-b-15">
                                        Color
                                    </div>

                                    <ul>
                                        <li className="p-b-6">
									        <span className="fs-15 lh-12 m-r-6" style={{color: "#222"}}>
										        <i className="zmdi zmdi-circle"></i>
									        </span>

                                            <a onClick={(e) => handleColor(e, "black")}
                                               href="javascript:void(0)" className="filter-link stext-106 trans-04">
                                                Black
                                            </a>
                                        </li>

                                        <li className="p-b-6">
									        <span className="fs-15 lh-12 m-r-6" style={{color: "#4272d7"}}>
										        <i className="zmdi zmdi-circle"></i>
									        </span>

                                            <a onClick={(e) => handleColor(e, "blue")} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                Blue
                                            </a>
                                        </li>

                                        <li className="p-b-6">
									        <span className="fs-15 lh-12 m-r-6" style={{color: "#b3b3b3"}}>
										        <i className="zmdi zmdi-circle"></i>
									        </span>

                                            <a onClick={(e) => handleColor(e, "grey")} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                Grey
                                            </a>
                                        </li>

                                        <li className="p-b-6">
									        <span className="fs-15 lh-12 m-r-6" style={{color: "#00ad5f"}}>
										        <i className="zmdi zmdi-circle"></i>
									        </span>

                                            <a onClick={(e) => handleColor(e, "green")} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                Green
                                            </a>
                                        </li>

                                        <li className="p-b-6">
									        <span className="fs-15 lh-12 m-r-6" style={{color: "#fa4251"}}>
										        <i className="zmdi zmdi-circle"></i>
									        </span>

                                            <a onClick={(e) => handleColor(e, "red")} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                Red
                                            </a>
                                        </li>

                                        <li className="p-b-6">
									        <span className="fs-15 lh-12 m-r-6" style={{color: "#aaa"}}>
										        <i className="zmdi zmdi-circle-o"></i>
									        </span>

                                            <a onClick={(e) => handleColor(e, "white")} href="javascript:void(0)"
                                               className="filter-link stext-106 trans-04">
                                                White
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="filter-col4 p-b-27">
                                    <div className="mtext-102 cl2 p-b-15">
                                        Tags
                                    </div>

                                    <div className="flex-w p-t-4 m-r--5">
                                        <a href="javascript:void(0)"
                                           onClick={(e) => handleTag(e, "fashion")}
                                           className="btn btn-sm btn-primary m-1">
                                            Fashion
                                        </a>

                                        <a href="javascript:void(0)"
                                           onClick={(e) => handleTag(e, "lifestyle")}
                                           className="btn btn-sm btn-primary m-1">
                                            Lifestyle
                                        </a>

                                        <a href="javascript:void(0)"
                                           onClick={(e) => handleTag(e, "denim")}
                                           className="btn btn-sm btn-primary m-1">
                                            Denim
                                        </a>

                                        <a href="javascript:void(0)"
                                           onClick={(e) => handleTag(e, "streetstyle")}
                                           className="btn btn-sm btn-primary m-1">
                                            Streetstyle
                                        </a>

                                        <a href="javascript:void(0)"
                                           onClick={(e) => handleTag(e, "crafts")}
                                           className="btn btn-sm btn-primary m-1">
                                            Crafts
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {products.length === 0 ?
                            <h1 className="text-red-500">No products found!</h1> : products.map((product) => (
                                <div className="col-sm-6 col-md-4 col-lg-3 p-b-35">
                                    <div className="block2">
                                        <div className="block2-pic hov-img0">
                                            <img src={product.image} alt="IMG-PRODUCT"/>

                                            <Link to={`/products/${product._id}`}
                                               className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                                                Quick View
                                            </Link>
                                        </div>

                                        <div className="block2-txt flex-w flex-t p-t-14">
                                            <div className="block2-txt-child1 flex-col-l ">
                                                <a href="product-detail.html"
                                                   className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                    {product.name}
                                                </a>

                                                <span className="stext-105 cl3">
									${product.price}
								</span>
                                            </div>

                                            <div className="block2-txt-child2 flex-r p-t-3">
                                                <a href="#"
                                                   className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                    <img className="icon-heart1 dis-block trans-04"
                                                         src="/frontend/images/icons/icon-heart-01.png" alt="ICON"/>
                                                    <img className="icon-heart2 dis-block trans-04 ab-t-l"
                                                         src="/frontend/images/icons/icon-heart-02.png" alt="ICON"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="flex-c-m flex-w w-full p-t-45">
                        <a onClick={handleLoadMore} href="javascript:void(0)"
                           className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
                        >
                            Load More
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductOverview
