"use client"
import { useEffect, useState } from 'react';

const fetchOrders = async (): Promise<Order[]> => {
  const response = await fetch('https://677cd4614496848554c7d30d.mockapi.io/OrderData');
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
};

const generateRandomStatus = () => {
  const statuses = ['Pending', 'Canceled', 'Completed'];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const fetchOrdersWithStatus = async (): Promise<(Order & { status: string })[]> => {
  const orders = await fetchOrders();
  return orders.map((order) => ({
    ...order,
    status: generateRandomStatus(), // Add a random status
  }));
};

// Function to format the Unix timestamp into a readable date (without time)
const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

export default function OrderHistory() {
  const [orders, setOrders] = useState<(Order & { status: string })[]>([]);

  useEffect(() => {
    fetchOrdersWithStatus()
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="max-w-7xl m-auto py-20 p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Order History</h1>
      <table className="w-full border-collapse rounded-lg">
        <thead>
          <tr>
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border text-center p-2">{order.orderId}</td>
              <td className="border text-center p-2">{formatDate(order.date)}</td>
              <td className="border text-center p-2">{order.customerName}</td>
              <td className="border text-center p-2">
                <span
                  className={`px-2 py-1 rounded ${
                    order.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : order.status === 'Canceled'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}