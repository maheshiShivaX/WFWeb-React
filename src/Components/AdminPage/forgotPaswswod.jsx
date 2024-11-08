import Header from "../Shared/Header";
import '../../Components/AdminPage/AdminCss/Login.css';
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { API_URL, baseurl } from '../../_Config';
import { decryptString } from "../../_seivices";
import CryptoJS from 'crypto-js';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [loginDetail, setLoginDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [jwtToken, setJwtToken] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const secretKey = CryptoJS.enc.Utf8.parse("uitsufdytuiysdifdsfdsfdhgtyuijkj");
    const iv = CryptoJS.enc.Utf8.parse("1234567890123456");

    const onLogin = async () => {
        setLoading(true);
        setError(null);

        try {

            const response = await axios.get(`${baseurl}${API_URL.GetLoginDetailByUserPass}`, {
                params: {
                    pUserName: email,
                    pPassword: password
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status == 200) {
                if (response.data.isSuccess == 200 && response.data.data.length > 0) {
                    setEmail("");
                    setPassword("");
                } else {
                    alert('You are not register');
                }
            }
        } catch (error) {
            setError("Please try again later.");
        } finally {
            setLoading(false);
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
                                        {/* <div className="logo-cover">
                                            <img src="./images/dark-logo.png" alt="" width={200} />
                                        </div> */}
                                        <form className="form-cover" onSubmit={(e) => e.preventDefault()}>
                                            <h3>Forgot Password</h3>
                                            <div className=" col-lg-12 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-title">
                                                    <p>E-Mail Address</p>
                                                </div>
                                                <div className="from-box">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Your Mail*"
                                                        required=""
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className=" col-lg-12 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-title">
                                                    <p>Password</p>
                                                </div>
                                                <div className="from-box">
                                                    <input
                                                        type="tel"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Your Password*"
                                                        required=""
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div> */}
                                            <div className="login_btn">
                                                <button
                                                    type="submit"
                                                    className="btn_logn_inner"
                                                    onClick={onLogin}
                                                    disabled={loading}
                                                >Submit</button>
                                                <p ><Link to='/Login'> Back </Link></p>
                                                {/* <a href="#">Forget Password ?</a> */}
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

export default ForgotPassword;
