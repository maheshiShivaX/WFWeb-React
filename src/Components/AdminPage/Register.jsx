import { Link, useNavigate } from "react-router-dom";
import Header from "../Shared/Header";
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { API_URL, baseurl } from '../../_Config';
import { decryptString } from "../../_seivices";
import CryptoJS from 'crypto-js';
// import { onRegister } from "../../_seivices/registerService";

const Register = () => {
    const navigate = useNavigate();
    const secretKey = CryptoJS.enc.Utf8.parse("uitsufdytuiysdifdsfdsfdhgtyuijkj");
    const iv = CryptoJS.enc.Utf8.parse("1234567890123456");

    const [formData, setFormData] = useState({
        employeeId: 0,
        name: "",
        emailId: "",
        mobileNo: "",
        password: "",
        confirmPassword: "",
    });

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.(com|in|co.in[a-z]{2,})$/.test(email);
    };

    const validatePhoneNumber = (phone) => {
        return /^\d{10}$/.test(phone) && /^[0-9]/.test(phone);
    };

    const onRegister = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.emailId)) {
            toast.error("Please enter a valid Email Address");
            return;
        }

        if (!validatePhoneNumber(formData.mobileNo)) {
            toast.error("Please enter a valid mobile number");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post(`${baseurl}${API_URL?.UserRegister}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status === 200) {
                if (response.data.isSuccess === 1) {
                    const encryptedData = response.data?.data;
                    const result = decryptString(encryptedData, secretKey, iv);
                    const parsedData = JSON.parse(result);
                    const jwtToken = response.data.token;
                    localStorage.setItem('WFjwtToken', jwtToken);
                    const { employeeId, loginId } = parsedData[0];
                    localStorage.setItem('WFemployeeId', employeeId);
                    localStorage.setItem('WFloginId', loginId);
                    localStorage.setItem('user', 'true');
                    toast.success("Registration successful!");
                    navigate('/companyprofile');
                } else {
                    alert("You are already registered. Please login.");
                    navigate('/login');
                }
            } else {
                toast.error("Failed to register");
            }
        } catch (error) {
            toast.error("Please try again later.");
        } finally {
            setFormData({
                employeeId: 0,
                name: "",
                emailId: "",
                mobileNo: "",
                password: "",
                confirmPassword: "",
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await onRegister(formData, navigate, setFormData);
    // };

    return (
        <div>
            <Header />
            <Toaster />
            <div className="bg_login_wepper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-12 login-card">
                            <div className="logn-part">
                                <div className="row">
                                    <div className="col-lg-10 col-md-12 mx-auto">
                                        {/* <div className="logo-cover">
                                            <img src="./images/dark-logo.png" alt="" width={200} />
                                        </div> */}
                                        <form className="form-cover" onSubmit={onRegister}>
                                            <h3>Register Here</h3>
                                            <div className=" col-lg-12 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-title">
                                                    <p>Full Name</p>
                                                </div>
                                                <div className="from-box">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Full name*"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className=" col-lg-12 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-title">
                                                    <p>E-Mail Address</p>
                                                </div>
                                                <div className="from-box">
                                                    <input
                                                        type="text"
                                                        name="emailId"
                                                        id="emailId"
                                                        placeholder="Your Mail*"
                                                        required
                                                        value={formData.emailId}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className=" col-lg-12 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-title">
                                                    <p>Mobile No.</p>
                                                </div>
                                                <div className="from-box">
                                                    <input
                                                        type="text"
                                                        name="mobileNo"
                                                        id="mobileNo"
                                                        placeholder="Mobile Number*"
                                                        required
                                                        value={formData.mobileNo}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className=" col-lg-12 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-title">
                                                    <p>Password</p>
                                                </div>
                                                <div className="from-box">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password*"
                                                        required
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className=" col-lg-12 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-title">
                                                    <p>Confirm Password</p>
                                                </div>
                                                <div className="from-box">
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        id="confirmPassword"
                                                        placeholder="Confirm Password*"
                                                        required
                                                        value={formData.confirmPassword}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="login_btn">
                                                <button type="submit" className="btn_logn_inner">Submit</button>
                                                <p > If you have an account? <Link to='/login'>Sing in</Link></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Register;