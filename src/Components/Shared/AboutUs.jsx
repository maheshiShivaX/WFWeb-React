import '../../ComponentsCSS/AboutUs.css';
const AboutUs = () => {
    return (
        <section>
            <div className='about_wepper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' data-aos="zoom-out">
                            <div className='about_img_data'>
                                <img src="./images/about-banner.png" alt="" className='w-100' />
                            </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' data-aos="fade-left">
                            <div className='about_hedding'>
                                <h3>About Us <span><img src="./images/round-arrow.svg" alt="" /></span></h3>
                                <h2>Our Story, as told by Founder Udaya Devineni</h2>
                                <p>A pivotal moment in 2010 ignited my journey toward revolutionizing convenience store management. Tasked with evaluating operations for a C-store network, I unearthed a stark reality: entrenched in outdated manual processes, operations were draining valuable time and resources. Determined to confront this challenge head-on, I delved deeper, uncovering issues such as unauthorized fuel deliveries and financial inconsistencies. It became abundantly clear that the status quo was no longer sustainable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;