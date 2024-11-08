// src/services/registerService.js
import axios from "axios";
import { toast } from "react-hot-toast";
import { API_URL, baseurl } from '../_Config';
import { decryptString } from "./index";
import CryptoJS from 'crypto-js';

const secretKey = CryptoJS.enc.Utf8.parse("uitsufdytuiysdifdsfdsfdhgtyuijkj");
const iv = CryptoJS.enc.Utf8.parse("1234567890123456");

export const onRegister = async (formData, navigate, setFormData) => {
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
                const { employeeId,loginId } = parsedData[0];
                localStorage.setItem('WFemployeeId', employeeId);
                localStorage.setItem('WFloginId', loginId);
                localStorage.setItem('user', 'true');
                toast.success("Registration successful!");
                navigate('/companyprofile');
            } else {
                toast.error("You are already registered. Please login.");
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

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.(com|in|co.in[a-z]{2,})$/.test(email);
};

const validatePhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone) && /^[0-9]/.test(phone);
};
