import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './product.json'; // Assuming you have JSON data

const ProductDetailsPage = () => {
  const { id } = useParams(); // Use useParams to extract the 'id' from the route
  const product = productsData.find((p) => p.id === parseInt(id));


  if (!product) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 flex justify-center items-center min-h-screen ">
      <div className="max-w-sm w-full bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <h1 className="text-2xl font-bold text-center">{product.name}</h1>
          <p className="text-center mt-2 text-sm uppercase tracking-widest">
            {product.category}
          </p>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-lg">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Description:</strong> {product.description
            }
          </p>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
