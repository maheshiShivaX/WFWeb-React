import '../../ComponentsCSS/ManageBusiness.css';
const ManageBusiness = () => {
    return (
        <div className='managebusiness_wepper'>
            <div className='managebusiness_hedding'>
                <h2>Manage Business Like A Pro</h2>
                <p>
                    Get every penny from purchases, make every penny from selling, and protect every penny you make.
                </p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                        <div className='manage_business_img_data'>
                            <img src="./images/manage-business.png" alt="" className='w-100' />
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                        <div className='register_box'>
                            <h2>Register  Your <br />Company <br /> Now</h2>
                            <a href="#" className='month_free'>Get 1 Month Free Trial</a>
                            <a href="#">
                                <img src="./images/register_aroow.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageBusiness;