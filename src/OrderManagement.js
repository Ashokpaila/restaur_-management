import React, { useState, useEffect } from 'react';
import './stylings.css'; 

const OrderManagement=()=> {
  const b = [
    [
      { id: 1, name: 'Burger', description: 'Delicious burger with all the fixings', price: 199 },
      { id: 2, name: 'Pasta', description: 'Pasta with homemade sauce', price: 299 }
    ],
    [{ id: 1, name: 'bIRYANI', description: 'Delicious burger with all the fixings', price: 199 },
      { id: 2, name: 'Paa', description: 'Pasta with homemade sauce', price: 299 }
    ]
  ];
  const output = b.map((items, id) => {
    const itemNames = items.map(item => item.name);
    return {
      id: id + 1,
      items: itemNames,
      status: 'Pending'
  }});
  const [orders, setOrders] = useState(output);

  const markOrderCompleted = (orderId) => {

    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: 'Completed' };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <div className="orders">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <h3>Order #{order.id}</h3>
            <p>Items: {order.items.join(', ')}</p>
            <p>Status: {order.status}</p>
            {order.status !== 'Completed' && (
              <button onClick={() => markOrderCompleted(order.id)}>Mark Completed</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderManagement;
