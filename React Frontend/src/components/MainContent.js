import React, { useState, useEffect } from 'react';

function MainContent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log("Fetching data from Django API...");
        fetch('http://127.0.0.1:8000/api/data/')
        .then(response => {
            console.log("Received response:", response);
            return response.json();
        })
        .then(data => {
            console.log("Received data:", data);
            setMessage(data.message);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <main>
            <p>{message}</p>
        </main>
    );
}
export default MainContent;
