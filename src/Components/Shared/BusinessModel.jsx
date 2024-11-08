
import '../../ComponentsCSS/BusinessModel.css';
const BusinessModel = () => {
    return (
        <div className='business_model_wepper'>
            <div className='business_model_hedding'>
                <h2>Built for Every Business Model</h2>
                <p>Get every penny from purchases, make every penny from selling, and protect every penny you make.</p>
            </div>
            <div className='our_services_wepper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12' data-aos="fade-right" data-aos-duration="3000">
                            <div className='our_services_hedding'>
                                <p>Our Services</p>
                                <h3>Optimize Your Finances</h3>
                                <span>Master your billing processes.</span>
                                <a href="#">Get Started</a>
                            </div>
                        </div>
                        <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12'>
                            <div className="row">
                                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6' data-aos="fade-left" data-aos-duration="1000">
                                    <div className='gas_box'>
                                        <img src="./images/gas.png" alt="" />
                                        <p>Gas inventory</p>
                                    </div>
                                </div>
                                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6' data-aos="fade-left" data-aos-duration="2000">
                                    <div className='gas_box'>
                                        <img src="./images/daily-sales.png" alt="" />
                                        <p>Daily sales</p>
                                    </div>
                                </div>
                                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6' data-aos="fade-left" data-aos-duration="3000">
                                    <div className='gas_box'>
                                        <img src="./images/storesummary.png" alt="" />
                                        <p>Store summary</p>
                                    </div>
                                </div>
                                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6' data-aos="fade-left" data-aos-duration="1000">
                                    <div className='gas_box'>
                                        <img src="./images/lotterymanagement.png" alt="" />
                                        <p>Lottery Management</p>
                                    </div>
                                </div>
                                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6' data-aos="fade-left" data-aos-duration="2000">
                                    <div className='gas_box'>
                                        <img src="./images/purchases.png" alt="" />
                                        <p>Purchases</p>
                                    </div>
                                </div>
                                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6' data-aos="fade-left" data-aos-duration="3000">
                                    <div className='gas_box'>
                                        <img src="./images/expenses.png" alt="" />
                                        <p>Expenses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='privacy_hedding'>
                        <h3>Privacy and Security Guaranteed</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BusinessModel;