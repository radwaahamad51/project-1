import React from "react";
import Navber from "../Main-design/Navber";
import Footer from "../Main-design/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <section className=" py-16">
           
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold -800 mb-4">About Us</h2>
                    <p className="text-xl ">
                        We are dedicated to providing top-quality sports equipment and apparel for athletes of all levels. Whether you're a
                        beginner or a pro, we've got everything you need to perform at your best.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Section - About Text */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold -800 mb-4">Our Mission</h3>
                        <p className="text-lg mb-6">
                            Our mission is to empower athletes by providing high-quality gear that enhances performance. We believe that sports
                            have the power to unite and inspire, and we strive to bring that energy to every product we offer.
                        </p>
                        <h3 className="text-2xl font-semibold -800 mb-4">Our Vision</h3>
                        <p className="text-lg -600">
                            To become the go-to destination for all sports enthusiasts, offering a wide variety of sports equipment and apparel,
                            with a focus on quality, performance, and customer satisfaction.
                        </p>
                    </div>

                    {/* Right Section - Image Gallery */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://i.ibb.co.com/YYkZHZF/sport-gear-1.jpg"
                            alt="Sport Gear"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <img
                            src="https://i.ibb.co.com/ZcXfrL7/sport-gear-2.jpg"
                            alt="Sport Apparel"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold -800 mb-4">Join Us in Our Journey!</h3>
                    <p className="text-lg -600 mb-6">
                        Ready to take your game to the next level? Check out our collection of sports gear and apparel, and join the community
                        of athletes dedicated to greatness.
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:bg-gradient-to-l transition-all duration-300">
                       <Link>Shop now</Link>
                    </button>
                </div>
            </div>
           
        </section>
    );
};

export default AboutUs;
