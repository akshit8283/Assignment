import React from 'react'

export const dustbin = () => {
    return (
        <div>
            <header className="header_area sticky-header">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">

                            <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
 
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                                    <li className="nav-item submenu dropdown active">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Shop</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="category.html">Shop Category</a></li>
                                            <li className="nav-item"><a className="nav-link" href="single-product.html">Product Details</a></li>
                                            <li className="nav-item"><a className="nav-link" href="checkout.html">Product Checkout</a></li>
                                            <li className="nav-item active"><a className="nav-link" href="cart.html">Shopping Cart</a></li>
                                            <li className="nav-item"><a className="nav-link" href="confirmation.html">Confirmation</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Blog</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                            <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
                                            <li className="nav-item"><a className="nav-link" href="tracking.html">Tracking</a></li>
                                            <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="nav-item"><a href="#" className="cart"><span className="ti-bag"></span></a></li>
                                    <li className="nav-item">
                                        <button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="search_input" id="search_input_box">
                    <div className="container">
                        <form className="d-flex justify-content-between">
                            <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                            <button type="submit" className="btn"></button>
                            <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
                        </form>
                    </div>
                </div>
            </header>
 

            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Shopping Cart</h1>
                            <nav className="d-flex align-items-center">
                                  <a href="index.html">Home<span className="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Cart</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                  </thead>
                                <body>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/cart.jpg" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <p>Minimalistic shop for multipurpose use</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$360.00</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                                    className="input-text qty" />
                                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                                    className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
                                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                                    className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$720.00</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> 
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/cart.jpg" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <p>Minimalistic shop for multipurpose use</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$360.00</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                                    className="input-text qty" />
                                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                                    className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
                                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                                    className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$720.00</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/cart.jpg" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <p>Minimalistic shop for multipurpose use</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$360.00</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                                    className="input-text qty" />
                                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                                    className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
                                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                                    className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$720.00</h5>
                                        </td>
                                    </tr>
                                    <tr className="bottom_button">
                                        <td>
                                            <a className="gray_btn" href="#">Update Cart</a>
                                        </td>
                                        <td>
                                               
                                        </td>
                                        <td>

                                        </td>
                                        <td> 
                                            <div className="cupon_text d-flex align-items-center">
                                                <input type="text" placeholder="Coupon Code" />
                                                <a className="primary-btn" href="#">Apply</a>
                                                <a className="gray_btn" href="#">Close Coupon</a>
                                            </div> 
                                        </td> 
                                    </tr> 
                                    <tr> 
                                        <td> 

                                        </td> 
                                        <td> 

                                        </td> 
                                        <td> 
                                            <h5>Subtotal</h5> 
                                        </td> 
                                        <td> 
                                            <h5>$2160.00</h5> 
                                        </td>  
                                    </tr> 
                                    <tr className="shipping_area"> 
                                        <td> 

                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div className="shipping_box">
                                                <ul className="list">
                                                    <li><a href="#">Flat Rate: $5.00</a></li>
                                                    <li><a href="#">Free Shipping</a></li>
                                                    <li><a href="#">Flat Rate: $10.00</a></li>
                                                    <li className="active"><a href="#">Local Delivery: $2.00</a></li>
                                                </ul>
                                                <h6>Calculate Shipping <i className="fa fa-caret-down" aria-hidden="true"></i></h6>
                                                <select className="shipping_select">
                                                    <option value="1">Bangladesh</option>
                                                    <option value="2">India</option>
                                                    <option value="4">Pakistan</option>
                                                </select>
                                                <select className="shipping_select">
                                                    <option value="1">Select a State</option>
                                                    <option value="2">Select a State</option>
                                                    <option value="4">Select a State</option>
                                                </select>
                                                <input type="text" placeholder="Postcode/Zipcode" />
                                                <a className="gray_btn" href="#">Update Details</a>
                                            </div> 
                                        </td> 
                                    </tr> 
                                    <tr className="out_button_area"> 
                                        <td> 

                                        </td> 
                                        <td> 

                                        </td> 
                                        <td> 

                                        </td>
                                        <td>
                                            <div className="checkout_btn_inner d-flex align-items-center">
                                                <a className="gray_btn" href="#">Continue Shopping</a>
                                                <a className="primary-btn" href="#">Proceed to checkout</a>
                                            </div> 
                                        </td> 
                                    </tr> 
                                </body> 
                            </table> 
                        </div> 
                    </div>  
                </div> 
            </section> 
        </div>
    )
}
export default dustbin     