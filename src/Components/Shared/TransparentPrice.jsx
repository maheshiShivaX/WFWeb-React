import '../../ComponentsCSS/TransparentPrice.css'

const TransparentPrice = () => {
    return (
        <div className='transparent_price' >
            <div className='transparent_priceh' data-aos="fade-down"  data-aos-duration="2000">
                <p>Transparent Pricing</p>
                <h2>Simple Plans for Diverse Needs</h2>
            </div>
            <div className='container'>
                <div className="monthly_box_wepper" data-aos="fade-up"  data-aos-duration="2000">
                   
                        <div className='monthly_box'>
                            <h4>Monthly</h4>
                            <div className='border_line'></div>
                            <div className='monthly_inner'>
                                <div className='price_wrapper'>
                                    <span className='dollar'>$</span>
                                    <p>14.99 <span>/per month</span></p>
                                </div>
                                <p>Best suited for businesses with one-time and subscription billing requirements</p>
                                <a href="#">Get Started</a>
                            </div>
                        </div>
                   
                   
                        <div className='monthly_box active'>
                            <h4>Monthly</h4>
                            <div className='border_line'></div>
                            <div className='monthly_inner'>
                                <div className='price_wrapper'>
                                    <span className='dollar'>$</span>
                                    <p>14.99 <span>/per month</span></p>
                                </div>
                                <p>Best suited for businesses with one-time and subscription billing requirements</p>
                                <a href="#">Get Started</a>
                            </div>
                        </div>
                
                 
                        <div className='monthly_box'>
                            <h4>Monthly</h4>
                            <div className='border_line'></div>
                            <div className='monthly_inner'>
                                <div className='price_wrapper'>
                                    <span className='dollar'>$</span>
                                    <p>14.99 <span>/per month</span></p>
                                </div>
                                <p>Best suited for businesses with one-time and subscription billing requirements</p>
                                <a href="#">Get Started</a>
                            </div>
                        </div>
                 
                </div>
            </div>
        </div>
    )
}

export default TransparentPrice;