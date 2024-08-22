import React, { useState, useEffect } from 'react';

function ItemsList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/items/')
            .then(response => response.json())
            .then(data => setItems(data.items))
            .catch(error => console.error('Error fetching items:', error));
    }, []);
    return (
        <div>
            <h2>Items List - My Second End Point</h2>
            
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}: ${item.price}
                    </li>
                ))}
            
        </div>
    );
}

export default ItemsList;