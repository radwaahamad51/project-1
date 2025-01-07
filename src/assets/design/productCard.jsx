import React from "react";
import { Link } from "react-router-dom";

const ProductSection = ({ products }) => {
    return (
        <div className="container max-w-7xl mx-auto py-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gradient from-green-400 to-blue-400">
                Explore Our Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
                {products.slice(0, 6).map((product) => (
                    <div
                        key={product.id}
                        className="card  mx-auto bg-gradient-to-r from-[#9bcec8] to-[#9bcec8] shadow-md hover:scale-105 transform transition-all duration-300"
                    >
                        <figure className="px-4 pt-4 h-40">
                            <img
                                src={product.image || "https://via.placeholder.com/150"}
                                alt={product.name}
                                className="rounded-md w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body text-center p-2">
                            <h2 className="card-title text-md font-bold text-gray-800">
                                {product.name}
                            </h2>
                            <p className="text-sm text-gray-700">{product.category}</p>
                            <p className="font-semibold text-gray-900 mt-2">
                                ${product.price.toFixed(2)}
                            </p>
                            <div className="card-actions justify-center mt-3">
                                <Link
                                    to={`/product-details/${product.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
