import React, { useState, useEffect } from "react";
import './PaymentSuccess.css';
import { useNavigate } from 'react-router-dom';
 // Import your CSS file for styling

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const search = window.location.search;
    const params = new URLSearchParams(search)
    const session_id = params.get('session_id') || null


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the URL
                const response = await fetch(`http://localhost:4000/payment-data?session_id=${encodeURI(session_id)}`);

                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Parse the JSON response
                const jsonData = await response.json();

                // Set the retrieved data to state
                setData(jsonData);
            } catch (error) {
                // Handle any errors
                setError(error);
            } finally {
                // Set loading state to false
                setLoading(false);
            }
        };

        // Call the fetch function
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {/* <h1>Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> */}
            Deliverying food to <br />
            {data?.session?.customer_details?.name}, <br />
            {data?.session?.customer_details?.address?.line1}, <br />
            {data?.session?.customer_details?.address?.line2}, <br />
            {data?.session?.customer_details?.address?.city}, <br />
            {data?.session?.customer_details?.address?.state}, <br />
            {data?.session?.customer_details?.address?.country}, <br />
            {data?.session?.customer_details?.address?.postal_code}, <br />







        </div>
    );
}



export default function PaymentSuccess() {
    const [modalVisible, setModalVisible] = useState(true);
    const navigate = useNavigate();

    const closeModal = () => {
        setModalVisible(false);
        // Redirect to the /orderstatus page when the modal is closed
        navigate('/orderstatus');
    };

    return (
        <>
            {modalVisible && (
                <div className="payment-success-modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Payment Successful!</h2>
                        <p>Thank you for your purchase.</p>
                        <DataFetcher />
                    </div>
                </div>
            )}
            
        </>
    );
}
