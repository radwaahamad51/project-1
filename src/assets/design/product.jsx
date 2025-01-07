import React from "react";
import ProductSection from "./productCard";


const sampleProducts = [
    {
        id: 1,
        name: "Soccer Ball",
        category: "Sports",
        price: 25.99,
        image: "https://i.ibb.co/rt4N3Hq/urnpublicidap-org5f647b9002d9e401d16570b0f9705c18-Germany-Soccer-EURO-2024-55630.webp",
        description: "High-quality soccer ball designed for professional gameplay.",
        rating: 4.5,
        stock: true,
        brand: "Adidas",
        variants: ["Standard", "Premium"],
        discount: 10,
        url: "/product/soccer-ball"
    },
    {
        id: 2,
        name: "Tennis Racket",
        category: "Sports",
        price: 75.5,
        image: "https://i.ibb.co/zNmz4T1/Untitled-1.webp",
        description: "Lightweight racket with excellent grip and durability.",
        rating: 4.7,
        stock: true,
        brand: "Wilson",
        variants: ["Junior", "Pro"],
        discount: 15,
        url: "/product/tennis-racket"
    },
    {
        id: 3,
        name: "Basketball",
        category: "Sports",
        price: 45.0,
        image: "https://i.ibb.co/Ny1jGrb/images-6.jpg",
        description: "Durable basketball suitable for indoor and outdoor courts.",
        rating: 4.3,
        stock: false,
        brand: "Spalding",
        variants: ["Size 5", "Size 7"],
        discount: 5,
        url: "/product/basketball"
    },
    {
        id: 4,
        name: "Baseball Glove",
        category: "Sports",
        price: 35.25,
        image: "https://i.ibb.co/1rPKMxj/raw-Image-1-480x480.webp",
        description: "Comfortable glove with premium leather for better grip.",
        rating: 4.8,
        stock: true,
        brand: "Rawlings",
        variants: ["Right-Handed", "Left-Handed"],
        discount: 20,
        url: "/product/baseball-glove"
    },
    {
        id: 5,
        name: "Swimming Goggles",
        category: "Sports",
        price: 19.99,
        image: "https://i.ibb.co/0mC7Qzh/07754871b650b024b4caeec754032fe1-jpg-720x720q80.jpg",
        description: "Anti-fog goggles for crystal clear underwater vision.",
        rating: 4.2,
        stock: true,
        brand: "Speedo",
        variants: ["Blue", "Clear"],
        discount: 10,
        url: "/product/swimming-goggles"
    },
    {
        id: 6,
        name: "Cycling Helmet",
        category: "Sports",
        price: 49.99,
        image: "https://i.ibb.co/jws3qgg/images-7.jpg",
        description: "Lightweight and durable helmet for cycling safety.",
        rating: 4.9,
        stock: true,
        brand: "Giro",
        variants: ["Small", "Medium", "Large"],
        discount: 25,
        url: "/product/cycling-helmet"
    },
    {
        id: 7,
        name: "Cricket Bat",
        category: "Sports",
        price: 89.99,
        image: "https://i.ibb.co/RHLjGv9/a21d65af11bc6884d14250c469974a65.jpg",
        description: "Professional-grade cricket bat with superior performance.",
        rating: 4.6,
        stock: false,
        brand: "Kookaburra",
        variants: ["Harrow", "Short Handle"],
        discount: 12,
        url: "/product/cricket-bat"
    }
];


const Product = () => {
    return (
        <div>
            <ProductSection products={sampleProducts} />
        </div>
    );
};

export default Product;
