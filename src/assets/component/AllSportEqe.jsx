import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from './product.json';

const AllSportsEquipmentPage = () => {
    const [sortedProducts, setSortedProducts] = useState(productsData);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSortByPrice = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        const sorted = [...sortedProducts].sort((a, b) => {
            return newSortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        });
        setSortedProducts(sorted);
        setSortOrder(newSortOrder);
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">All Sports Equipment</h1>
                <button
                    onClick={handleSortByPrice}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </div>
            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Category</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map((product) => (
                        <tr key={product.id}>
                            <td className="px-4 py-2 border">{product.name}</td>
                            <td className="px-4 py-2 border">{product.category}</td>
                            <td className="px-4 py-2 border">${product.price}</td>
                            <td className="px-4 py-2 border">
                                <Link
                                    to={`/product-details/${product.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllSportsEquipmentPage;
