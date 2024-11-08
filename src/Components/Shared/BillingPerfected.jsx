import '../../ComponentsCSS/BillingPerfected.css';

const BillingPerfected = () => {
    return (
        <div className='BillingPerfected_wepper'>
            <div className='container'>
                <div className='billing_perfected_hedding'>
                    <p>Billing perfected:</p>
                    <h2>Experience The Difference</h2>
                </div>
                <div className='row'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12' data-aos="fade-down">
                        <div className='compliance_box'>
                            <img src="./images/compliance.svg" alt="" />
                            <h3>Compliance</h3>
                            <p>Zoho Billing ensures that all your e-invoices are validated by the IRP and meet GST requirements.</p>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12' data-aos="fade-down">
                        <div className='compliance_box'>
                            <img src="./images/flexibility.svg" alt="" />
                            <h3>Flexibility</h3>
                            <p>Swiftly adapt and thrive with support for a diverse range of pricing models, empowering you to switch strategies effortlessly.</p>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12' data-aos="fade-down">
                        <div className='compliance_box'>
                            <img src="./images/globalization.svg" alt="" />
                            <h3>Globalization</h3>
                            <p>Go global with multi-currency and multilingual capabilities to expand your business's reach and succeed on an international scale.</p>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12' data-aos="fade-up">
                        <div className='compliance_box'>
                            <img src="./images/customization.svg" alt="" />
                            <h3>Customization</h3>
                            <p>Empower your team with unparalleled control over the different modules' appearance and functionality. Customize with additional fields, custom views, links, buttons, modules, and more.</p>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12' data-aos="fade-up">
                        <div className='compliance_box'>
                            <img src="./images/automation.svg" alt="" />
                            <h3>Automation</h3>
                            <p>Streamline your workflow with automated processes, from billing reminders to payment handling, saving time and ensuring efficiency.</p>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12' data-aos="fade-up">
                        <div className='compliance_box'>
                            <img src="./images/low-code.svg" alt="" />
                            <h3>Low code</h3>
                            <p>Free up your team for more critical tasks, as Zoho Billing's low-code platform simplifies and enhances your workflow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillingPerfected;