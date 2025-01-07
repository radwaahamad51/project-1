const Reviews = () => {
    const reviews = [
        { 
            name: "John Doe", 
            review: "Amazing products, great quality!", 
            rating: 5, 
            themeColor: "orange", 
            borderStyle: "dashed", 
            gradient: "bg-gradient-to-r from-yellow-400 to-orange-300" 
        },
        { 
            name: "Jane Smith", 
            review: "Fast delivery and excellent customer service.", 
            rating: 4, 
            borderStyle: "dashed", 
            gradient: "bg-gradient-to-r from-green-400 to-blue-400" 
        },
        { 
            name: "Sam Wilson", 
            review: "Wide variety of gadgets to choose from.", 
            rating: 5, 
            borderStyle: "dashed", 
            gradient: "bg-gradient-to-r from-yellow-400 to-orange-300" 
        },
        { 
            name: "Sam Wilson", 
            review: "Wide variety of gadgets to choose from.", 
            rating: 5, 
            borderStyle: "dashed", 
            gradient: "bg-gradient-to-r from-yellow-400 to-orange-300" 
        },
        { 
            name: "Sam Wilson", 
            review: "Wide variety of gadgets to choose from.", 
            rating: 5, 
            borderStyle: "dashed", 
            gradient: "bg-gradient-to-r from-yellow-400 to-orange-300" 
        },
        { 
            name: "Sam Wilson", 
            review: "Wide variety of gadgets to choose from.", 
            rating: 5, 
            borderStyle: "dashed", 
            gradient: "bg-gradient-to-r from-yellow-400 to-orange-300" 
        },
    ];

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-2 ">
                {reviews.map((review, index) => (
                    <div 
                        key={index} 
                        className={` mx-auto p-2 rounded-lg shadow-md ${review.gradient} border-${review.borderStyle} hover:scale-105 transform transition-transform duration-300`}
                    >
                        <h3 className="font-bold text-lg">{review.name}</h3>
                        <p className="text-gray-800 mt-2">{review.review}</p>
                        <p className="font-semibold text-red-600 mt-3">Rating: {review.rating}★</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
