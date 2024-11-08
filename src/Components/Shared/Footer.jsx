import '../../ComponentsCSS/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='container'>
                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className='footer_logo'>
                            <img src="./images/logo.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6">
                        <div className='footer_hedding'>
                            <h2>Product</h2>
                            <ul>
                                <li><a href="#">All features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Integrations</a></li>
                                <li><a href="#">Customers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6">
                        <div className='footer_hedding'>
                            <h2>Resources</h2>
                            <ul>
                                <li><a href="#">Billing Academy</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Webinars</a></li>
                                <li><a href="#">API Documentation</a></li>
                                <li><a href="#">What's New</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6">
                        <div className='footer_hedding'>
                            <h2>Free Tools</h2>
                            <ul>
                                <li><a href="#">Estimate generator</a></li>
                                <li><a href="#">Invoice generator</a></li>
                                <li><a href="#">Receipt generator</a></li>
                                <li><a href="#">Revenue forecaster</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className='footer_hedding'>
                            <h2>Contact Us</h2>
                            <ul>
                                <li>Monday - Friday</li>
                                <li><a href="#">Toll-Free:  +1 8443165544</a></li>
                                <li><a href="#">Email us: support@zohobilling.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copy_right'>
                 <p>© 2024, wilko Corporation Pvt. Ltd. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;