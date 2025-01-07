import React from 'react';

const sportsCards = [
    {
        title: "Football Pro",
        subtitle: "Kick Off the Season",
        description: "Join our football camp and improve your skills on the field.",
        themeColor: "orange",
        image: "https://i.ibb.co.com/yyRGw3R/images-1.jpg",
        borderStyle: "dashed",
        icon: "⚽",
        gradient: "bg-gradient-to-r from-orange-500 to-yellow-500"
    },
    {
        title: "Tennis Ace",
        subtitle: "Serve It Right",
        description: "Perfect your serve with our expert coaching sessions.",
        themeColor: "green",
        image: "https://i.ibb.co.com/XDNg9NS/istockphoto-1064467356-612x612.jpg",
        borderStyle: "solid",
        icon: "🎾",
        gradient: "bg-gradient-to-r from-green-400 to-blue-400"
    },
    {
        title: "Cricket Stars",
        subtitle: "Hit a Six!",
        description: "Step up your game with batting and bowling drills.",
        themeColor: "red",
        image: "https://i.ibb.co.com/T0h0chH/images-2.jpg",
        borderStyle: "double",
        icon: "🏏",
        gradient: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
        title: "Swimming Champs",
        subtitle: "Dive In!",
        description: "Improve your strokes and endurance in the pool.",
        themeColor: "blue",
        image: "https://i.ibb.co.com/3mTqwXc/images-3.jpg",
        borderStyle: "dotted",
        icon: "🏊‍♂️",
        gradient: "bg-gradient-to-r from-blue-400 to-cyan-400"
    },
    {
        title: "Cycling Trailblazers",
        subtitle: "Ride the Path",
        description: "Join our cycling adventures and train like a pro.",
        themeColor: "yellow",
        image: "https://i.ibb.co.com/SnfDhdG/images-4.jpg",
        borderStyle: "groove",
        icon: "🚴",
        gradient: "bg-gradient-to-r from-yellow-400 to-orange-300"
    }
];

const Card = ({ title, subtitle, description, themeColor, image, borderStyle, icon, gradient }) => {
    return (
        <div
            className={`max-w-7xl p-4 mx-auto rounded-lg shadow-lg text-white ${gradient} border-${borderStyle} border-2`}
        >
            <div className="flex items-center gap-3">
                <div className="text-3xl">{icon}</div>
                <img src={image} alt={title} className="w-12 h-12 rounded-lg object-cover" />
            </div>
            <h1 className="text-xl font-bold mt-3">{title}</h1>
            <h2 className={`text-md font-semibold text-${themeColor}-200`}>{subtitle}</h2>
            <p className="text-xs mt-2">{description}</p>
        </div>
    );
};

const SportsCategories = () => {
    return (
        <div className="p-6 mx-auto  max-w-7xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Sports Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
                {sportsCards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default SportsCategories;
