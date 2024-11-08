import axios from 'axios';
import '../../ComponentsCSS/PackageSection.css';
import { API_URL, baseurl } from '../../_Config';
import { useEffect, useState } from 'react';
import { getPackages, getUserPackageDetail, onSavePackage } from '../../_seivices/companyService';
import { Toaster } from 'react-hot-toast';
import DataTable from 'react-data-table-component';

const PackageSection = (props) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [packageDetail, setPackageDetail] = useState([]);
    const [userPackage, setPackage] = useState([]);
    const [selectedPackageId, setSelectedPackageId] = useState(1);
    const [formData, setFormData] = useState({
        companyPackageId: 0,
        packageId: 1,
        companyId: props?.companyId,
        packageStatus: 1,
        isActive: true,
        createdBy: 0
    });

    const packageDetails = async () => {
        const data = await getPackages();
        console.log(data, 'datatatattaa')
        if (data != null) {
            setPackageDetail(data);
        }
    };

    const userPackageDetail = async () => {
        setLoading(true);
        try {
            const data = await getUserPackageDetail(props?.companyId);
            if (data != null) {
                setPackage(data);
            } else {
                setPackage([]);
            }
        } catch (error) {
            console.error('Error fetching package details:', error);
            setPackage([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        packageDetails();
        userPackageDetail();
    }, [props?.companyId]);

    const handlePackageSelect = (packageId) => {
        setSelectedPackageId(packageId);
        setFormData((prevState) => ({
            ...prevState,
            packageId: packageId
        }));
    };

    const onCreateOrder = () => {
        onSavePackage(formData);
        setFormData({
            companyPackageId: 0,
            packageId: 1,
            companyId: props?.companyId,
            packageStatus: 1,
            isActive: true,
            createdBy: 0
        })
    }

    const columns = [
        {
            name: 'Package',
            selector: row => row.packageTypeName,
            sortable: false
        },
        {
            name: 'amount',
            selector: row => (
                <span>${row.amount}</span>
            ),
            sortable: false,
            width: '80px'
        },
        {
            name: 'Start Date',
            selector: row => (
                <div>{row.fromDate}</div>
            ),
            sortable: false
        },
        {
            name: 'End Date',
            selector: row => (
                <div>{row.toDate}</div>
            ),
            sortable: false
        },
        {
            name: 'Status',
            selector: row => (
                <div>{row.packageStatusType}</div>
            ),
            sortable: false,
            width: '80px'
        }
    ];

    const isAnyPackageActive = userPackage?.some(pkg => pkg.packageStatusType === 'Active');

    return (
        <div className="package_wrapper">
            <Toaster />
            {!isAnyPackageActive && (
                <div className="package_content row">
                    {packageDetail?.map((item, i) => (
                        <div key={i} className='col-md-4 col-12 mb-2'>
                            <div className={`package_box ${selectedPackageId === item.packageId ? 'selected' : ''}`}
                                onClick={() => handlePackageSelect(item.packageId)}>
                                <h5>{item?.packageTypeName}</h5>
                                <h3 className='mt-2'>${item?.amount}</h3>
                                <div className='mt-2'>
                                    <p>{item?.packageDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='procced_to_pay_btn d-flex justify-content-center mt-3'>
                        <button onClick={onCreateOrder}>Proceed to Payment</button>
                    </div>
                </div>
            )}
            {isAnyPackageActive && (
                <div className='plan_details'>
                    <div className='user_plan_get'>
                        <div className="datatable mt-3">
                            <DataTable
                                columns={columns}
                                data={userPackage || []}
                                progressPending={loading}
                                progressComponent={<p>Loading...</p>}
                                highlightOnHover
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PackageSection;