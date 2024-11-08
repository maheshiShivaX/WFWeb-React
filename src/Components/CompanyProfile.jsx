import { Link, useNavigate } from "react-router-dom";
import Header from "./Shared/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { getCompanyDetailById, onCompanyProfile } from "../_seivices/companyService";
import Layout from "./Shared/Layout";
import '../ComponentsCSS/CompanyProfile.css';
import PackageSection from "./Shared/PackageSection";

const CompanyProfile = () => {
    const navigate = useNavigate();
    const WFloginId = localStorage.getItem('WFloginId');
    const WFemployeeId = localStorage.getItem('WFemployeeId');
    const [companyDetails, setCompanyDetails] = useState(null);
    const [companyId, setCompanyId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        companyId: 0,
        employeeId: WFemployeeId,
        loginId: WFloginId,
        comapnyName: '',
        address: '',
        contactNo: '',
        emailid: '',
        companyLogo: '',
        isActive: true,
        createdBy: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onCompanyProfile(formData, setFormData);
        setShowForm(false);
        fetchCompanyDetails();
    };

    const fetchCompanyDetails = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getCompanyDetailById(WFloginId);
            if (data != null) {
                setCompanyDetails(data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCompanyDetails();
    }, [WFloginId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const onEdit = (item) => {
        setCompanyId(item?.companyId)
        setShowForm(true);
        setFormData({
            ...formData,
            companyId: item?.companyId,
            employeeId: WFemployeeId,
            loginId: WFloginId,
            comapnyName: item?.comapnyName,
            address: item?.address,
            contactNo: item?.contactNo,
            emailid: item?.emailid,
            companyLogo: item?.companyLogo,
            isActive: true,
            // createdBy: 0
        })
    }

    const onReset = () => {
        setFormData({
            companyId: 0,
            employeeId: WFemployeeId,
            loginId: WFloginId,
            comapnyName: '',
            address: '',
            contactNo: '',
            emailid: '',
            companyLogo: '',
            isActive: true,
            createdBy: 0
        })
    }

    return (
        <div>
            <Layout >
                <Toaster />
                <div className="bg_company_wepper" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-10 col-12 login-card">
                                {companyDetails != null && !showForm ?
                                    <>
                                        <h3 className="company_profile_heading">Company Profile</h3>
                                        <div className="company_details">
                                            <div className="text-end mb-3 edit_button">
                                                <button onClick={() => onEdit(companyDetails[0])}>
                                                    <svg
                                                        id="Layer_1"
                                                        height="20"
                                                        viewBox="0 0 512 512"
                                                        width="20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnssvgjs="http://svgjs.dev/svgjs"
                                                    >
                                                        <g transform="matrix(1,0,0,1,0,0)">
                                                            <path
                                                                d="m456.579 15.7a53.707 53.707 0 0 0 -75.9 0l-266.124 266.129a31.994 31.994 0 0 0 -8.527 15.317l-21.339 90.935a32 32 0 0 0 38.16 38.534l91.7-20.573a32 32 0 0 0 15.622-8.6l266.129-266.124a53.709 53.709 0 0 0 0-75.9zm-292.11 312.54 19.148 19.147-24.955 5.6zm67.452-23.058-25.107-25.107 211.816-211.812 25.106 25.107zm-231.921 146.683v-342.447a60.2 60.2 0 0 1 60.136-60.135h158.8a32 32 0 0 1 0 64h-154.936v334.717h334.718v-154.935a32 32 0 0 1 64 0v158.8a60.2 60.2 0 0 1 -60.135 60.135h-342.447a60.2 60.2 0 0 1 -60.136-60.135z"
                                                                fill="#8a195f"
                                                                stroke="none"
                                                            />
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div>
                                                <div className="profile_content">
                                                    <h5>Company Name :- </h5>
                                                    <span>{companyDetails[0]?.comapnyName}</span>
                                                </div>
                                                <div className="profile_content">
                                                    <h5>Email Id :- </h5>
                                                    <span>{companyDetails[0]?.emailid}</span>
                                                </div>
                                                <div className="profile_content">
                                                    <h5>Mobile No. :- </h5>
                                                    <span>{companyDetails[0]?.contactNo}</span>
                                                </div>
                                                <div className="profile_content">
                                                    <h5>Address :- </h5>
                                                    <span>{companyDetails[0]?.address}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <PackageSection companyId={companyDetails[0].companyId}/>
                                    </>
                                    :
                                    <div className="logn-part login_form_box">
                                        <div className="row">
                                            <div className="col-md-12 mx-auto">
                                                {/* <div className="form_close_btn">
                                                    <button>
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="25" height="25" fill="#ffffff">
                                                            <path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" />
                                                        </svg>
                                                    </button>
                                                </div> */}
                                                <form className="form-cover row" onSubmit={handleSubmit}>
                                                    <h3>Company Profile</h3>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-title">
                                                            <p>Company Name</p>
                                                        </div>
                                                        <div className="from-box">
                                                            <input
                                                                type="text"
                                                                name="comapnyName"
                                                                id="comapnyName"
                                                                placeholder="Company name*"
                                                                required
                                                                value={formData.comapnyName}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-title">
                                                            <p>E-Mail</p>
                                                        </div>
                                                        <div className="from-box">
                                                            <input
                                                                type="text"
                                                                name="emailid"
                                                                id="emailid"
                                                                placeholder="Your Mail*"
                                                                required
                                                                value={formData.emailid}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-title">
                                                            <p>Mobile No.</p>
                                                        </div>
                                                        <div className="from-box">
                                                            <input
                                                                type="text"
                                                                name="contactNo"
                                                                id="contactNo"
                                                                placeholder="Contact Number*"
                                                                required
                                                                value={formData.contactNo}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-title">
                                                            <p>Address</p>
                                                        </div>
                                                        <div className="from-box">
                                                            <input
                                                                type="text"
                                                                name="address"
                                                                id="address"
                                                                placeholder="Address*"
                                                                required
                                                                value={formData.address}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="login_btn d-flex justify-content-center px-2" style={{ gap: '15px' }}>
                                                        <button type="submit" className="btn_logn_inner" >Submit</button>
                                                        {companyDetails == null ?
                                                            <button onClick={() => onReset()} type="button" className="btn_logn_inner" >Reset</button> :
                                                            null
                                                        }
                                                    </div>
                                                </form>
                                                {companyDetails != null ?
                                                    <div className="form_close_btn">
                                                        <span onClick={() => setShowForm(false)} style={{ cursor: 'pointer' }}>back</span>
                                                    </div> :
                                                    null
                                                }
                                            </div>

                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default CompanyProfile;