import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-xl text-gray-600">
                        We'd love to hear from you! Whether you have a question, feedback, or just want to chat about sports, reach out to
                        us anytime.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Location
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                        Visit us or get in touch. We’d love to help with any inquiries or provide expert advice on sports gear and apparel.
                    </p>

                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-green-500 mr-4 text-2xl" />
                        <span className="text-lg text-gray-600">123 Sports Street, City</span>
                    </div>

                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-green-500 mr-4 text-2xl" />
                        <span className="text-lg text-gray-600">Phone: (123) 456-7890</span>
                    </div>

                    <div className="flex items-center">
                        <FaEnvelope className="text-green-500 mr-4 text-2xl" />
                        <span className="text-lg text-gray-600">email@example.com</span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;
