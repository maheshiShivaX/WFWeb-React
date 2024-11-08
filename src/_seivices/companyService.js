// src/services/companyService.js
import axios from "axios";
import { toast } from "react-hot-toast";
import { API_URL, baseurl } from '../_Config';

export const onCompanyProfile = async (formData, setFormData) => {
    const WFjwtToken = localStorage.getItem('WFjwtToken');
    const WFloginId = localStorage.getItem('WFloginId');
    const WFemployeeId = localStorage.getItem('WFemployeeId');

    if (!validateEmail(formData.emailid)) {
        toast.error("Please enter a valid Email Address");
        return;
    }

    if (!validatePhoneNumber(formData.contactNo)) {
        toast.error("Please enter a valid mobile number");
        return;
    }

    try {
        const response = await axios.post(`${baseurl}${API_URL?.SaveCompanyDetail}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${WFjwtToken}`,
            }
        });
        if (response.status === 200) {
            if (response.data.isSuccess === 1) {
                toast.success("Detail Save successful!");
            } else {
                toast.error("You are already registered.");
            }
        } else {
            toast.error("Failed to register");
        }
    } catch (error) {
        toast.error("Please try again later.");
    } finally {
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
        });
    }
};

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.(com|in|co.in[a-z]{2,})$/.test(email);
};

const validatePhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone) && /^[0-9]/.test(phone);
};

export const getCompanyDetailById = async (id) => {
    const WFjwtToken = localStorage.getItem('WFjwtToken');
    try {
        const response = await axios.get(`${baseurl}${API_URL.GetCompanyDetailById}`, {
            params: {
                pLoginId: id
            },
            headers: {
                'Authorization': `Bearer ${WFjwtToken}`,
            }
        });
        if (response.status === 200) {
            if (response.data.isSuccess === 1) {
                return response.data.data;
            }
        } else {
            throw new Error("Failed to fetch company data");
        }
    } catch (error) {
        toast.error("Please try again later.");
        throw error;
    }
};

export const getPackages = async () => {
    const WFjwtToken = localStorage.getItem('WFjwtToken');
    try {
        const response = await axios.get(`${baseurl}${API_URL.GetPackage}`, {
            headers: {
                'Authorization': `Bearer ${WFjwtToken}`,
            }
        });
        if (response.status === 200) {
            if (response.data.isSuccess === 1) {
                return response.data.data;
            } else {
                return 'data not found'
            }
        } else {
            throw new Error("Failed to fetch company data");
        }
    } catch (error) {
        toast.error("Please try again later.");
        throw error;
    }
};

export const onSavePackage = async (formData, setFormData) => {
    const WFjwtToken = localStorage.getItem('WFjwtToken');

    try {
        const response = await axios.post(`${baseurl}${API_URL?.SaveCompanyPackage}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${WFjwtToken}`,
            }
        });

        if (response.status === 200) {
            if (response.data.isSuccess === 1) {
                toast.success("Detail Save successful!");
            } else {
                toast.error("Save failed");
            }
        } else {
            toast.error("Failed");
        }
    } catch (error) {
        toast.error("Please try again later.");
    }
};

export const getUserPackageDetail = async (id) => {
    const WFjwtToken = localStorage.getItem('WFjwtToken');
    try {
        const response = await axios.get(`${baseurl}${API_URL.GetCompanyPackageCompanyId}`, {
            params: {
                pCompanyId: id
            },
            headers: {
                'Authorization': `Bearer ${WFjwtToken}`,
            }
        });
        if (response.status === 200) {
            if (response.data.isSuccess === 1) {
                return response.data.data;
            } else {
                return 'data not found'
            }
        } else {
            throw new Error("Failed to fetch company data");
        }
    } catch (error) {
        toast.error("Please try again later.");
        throw error;
    }
};

