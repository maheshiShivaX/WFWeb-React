import Header from "../Shared/Header";
import '../../Components/AdminPage/AdminCss/Login.css';
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { onLogin } from "../../_seivices/loginService";

import axios from "axios";
import { API_URL, baseurl } from '../../_Config';
import { toast } from "react-hot-toast";
import { decryptString } from "../../_seivices";
import CryptoJS from 'crypto-js';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const secretKey = CryptoJS.enc.Utf8.parse("uitsufdytuiysdifdsfdsfdhgtyuijkj");
    const iv = CryptoJS.enc.Utf8.parse("1234567890123456");

    // const handleSubmit = (e) => {
    //     // e.preventDefault();
    //     setLoading(true);
    //     setError(null);
    //     onLogin(email, password, navigate);
    //     setEmail("");
    //     setPassword("");
    // };

    const onLogin = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${baseurl}${API_URL.login}`, {
                userId: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Check for a successful response
            if (response.status == 200) {
                if (response.data.isSuccess == 1) {
                    const encryptedData = response.data.data;

                    // Decrypt and parse data
                    const result = decryptString(encryptedData, secretKey, iv);
                    const parsedData = JSON.parse(result);

                    const jwtToken = response.data.token;

                    // Store data in localStorage
                    localStorage.setItem('WFjwtToken', jwtToken);
                    const { employeeId, loginId } = parsedData[0];
                    localStorage.setItem('WFemployeeId', employeeId);
                    localStorage.setItem('WFloginId', loginId);
                    localStorage.setItem('user', 'true');

                    toast.success("Login successful!");
                    navigate('/companyprofile');
                } else {
                    toast.error(response.data.message || "You are not registered");
                }
            } else {
                toast.error("Failed to login");
            }
        } catch (error) {
            toast.error("Please try again later.");
        } finally {
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div>
            <Header />
            <div className="bg_login_wepper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-12 login-card">
                            <div className="logn-part">
                                <div className="row">
                                    <div className="col-lg-10 col-md-12 mx-auto">
                                        <form className="form-cover" onSubmit={(e) => e.preventDefault()}>
                                            <h3>Login Here</h3>
                                            <div className="col-sm-12">
                                                <div className="form-title">
                                                    <p>E-Mail Address</p>
                                                </div>
                                                <div className="from-box">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Your Mail*"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-title">
                                                    <p>Password</p>
                                                </div>
                                                <div className="from-box">
                                                    <input
                                                        type="password" // Changed to password for security
                                                        name="password"
                                                        id="password"
                                                        placeholder="Your Password*"
                                                        required
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="login_btn">
                                                <button
                                                    onClick={onLogin}
                                                    type="submit"
                                                    className="btn_logn_inner"
                                                    disabled={loading}
                                                >Submit</button>
                                                <p className="mb-2"> Don't Have an account? <Link to='/register'> Register </Link></p>
                                                <Link to='/forgotpassword'>Forget Password?</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster /> {/* Include Toaster for notifications */}
        </div>
    );
}

export default Login;
