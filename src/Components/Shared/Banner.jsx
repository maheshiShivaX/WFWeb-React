import '../../ComponentsCSS/Banner.css';
import React, { useEffect } from 'react';
import bannerInner1 from '../../images/bannerinner1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,  // Customize the animation duration (in milliseconds)
            once: true,      // Whether animation should happen only once - while scrolling down
        });
    }, []);
    return (
        <section>
            <div className="banner_bg">
                <div className='banner_content'>
                    <h1 data-aos="fade-down">The Future of Manufacturing
                        with Latest Technology</h1>
                    <div className='banner_btn_wepper'>
                        <ul>
                            <li><a href="#" className='active'>Get Started</a></li>
                            <li><a href="#">Try Free Trial</a></li>
                        </ul>
                    </div>
                    <div className='banner_box_wepper'>
                        <div className='banner_box_inner'>
                        <img src={bannerInner1} alt="Banner" className="banner_inner1" data-aos="fade-right" />
                            <div className='our_esteemed_box our_esteemed_box_position_set' data-aos="fade-right">
                                <h3>100+</h3>
                                <p>Our Esteemed Clients and Partners</p>
                            </div>
                            <div className='our_esteemed_box1' data-aos="fade-up">
                                <img src="./images/project-icon.png" alt="" />
                                <p>Total Projects</p>
                                <h2>1950+</h2>
                                <p className='increase'>Increase <span>58%</span> in this months</p>
                            </div>
                            <div className='our_esteemed_box years_box' data-aos="fade-left">
                                <h3>100+</h3>
                                <p>Years of Dedicated Service</p>
                            </div>
                            <div className='get_most_box' data-aos="fade-left">
                                <h2>Don’t Get More…
                                    Get the Most</h2>
                                <p>Maximize your time by automating your business controls - Meet mercury|one back office, your virtual c-store manager.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;