import React from 'react'

const Footer = () => {
    return (
        <footer className="bg3 py-10">
            <div className="container p-t-75">
                <div className="row">
                    {/* Categories */}
                    <div className="col-sm-6 col-lg-3 mb-4">
                        <h4 className="stext-301 cl0 mb-3">Categories</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Women</a></li>
                            <li className="mb-2"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Men</a></li>
                            <li className="mb-2"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Shoes</a></li>
                            <li className="mb-2"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Watches</a></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="col-sm-6 col-lg-3 mb-4">
                        <h4 className="stext-301 cl0 mb-3">Help</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Track Order</a></li>
                            <li className="mb-2"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Returns</a></li>
                            <li className="mb-2"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Shipping</a></li>
                            <li className="mb-2"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Get in touch */}
                    <div className="col-sm-6 col-lg-3 mb-4">
                        <h4 className="stext-301 cl0 mb-3">Get in Touch</h4>
                        <p className="stext-107 cl7 mb-3">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or
                            call us on (+1) 96 716 6879
                        </p>
                        <div>
                            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 me-3"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 me-3"><i className="fa fa-instagram"></i></a>
                            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 me-3"><i className="fa fa-pinterest-p"></i></a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="col-sm-6 col-lg-3 mb-4">
                        <h4 className="stext-301 cl0 mb-3">Newsletter</h4>
                        <form>
                            <div className="wrap-input1 w-full mb-3">
                                <input
                                    className="input1 bg-none plh1 stext-107 cl7"
                                    type="text"
                                    name="email"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 px-4 py-2 trans-04">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="pt-4 text-center">
                    <div className="flex-c-m flex-w pb-3 justify-center">
                        <a href="#" className="mx-1"><img src="/frontend/images/icons/icon-pay-01.png" alt="Pay" /></a>
                        <a href="#" className="mx-1"><img src="/frontend/images/icons/icon-pay-02.png" alt="Pay" /></a>
                        <a href="#" className="mx-1"><img src="/frontend/images/icons/icon-pay-03.png" alt="Pay" /></a>
                        <a href="#" className="mx-1"><img src="/frontend/images/icons/icon-pay-04.png" alt="Pay" /></a>
                        <a href="#" className="mx-1"><img src="/frontend/images/icons/icon-pay-05.png" alt="Pay" /></a>
                    </div>

                    <p className="stext-107 cl6">
                        © {new Date().getFullYear()} All rights reserved | Made with <i className="fa fa-heart-o"></i> by
                        <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer"> Colorlib</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer