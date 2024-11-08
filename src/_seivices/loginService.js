import axios from "axios";
import { API_URL, baseurl } from '../_Config';
import { toast } from "react-hot-toast";
import { decryptString } from "./index";
import CryptoJS from 'crypto-js';

const secretKey = CryptoJS.enc.Utf8.parse("uitsufdytuiysdifdsfdsfdhgtyuijkj");
const iv = CryptoJS.enc.Utf8.parse("1234567890123456");

export const onLogin = async (email, password, navigate) => {
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
            }
            else {
                toast.error(response.data.message || "You are not registered");
            }
        }
    } catch (error) {
        toast.error("Please try again later.");
    }
};
