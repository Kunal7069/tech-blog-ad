import React from 'react';
import Navbar from './Navbar';

function Footer() {
    return (
        // <div className="flex flex-col min-h-screen">
           
        <main className="flex-grow container mx-auto px-4 py-8">
        {/* Contact Information */}
        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Contact Us
            </h2>
            <p className="text-gray-600 text-lg mb-4 text-center">
                If you have any questions or would like to get in touch, please feel free to contact us at:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <p className="text-gray-800 font-semibold">Email:</p>
                <p className="text-gray-600">contact@techblogger.com</p>
                <p className="text-gray-800 font-semibold mt-4">Phone:</p>
                <p className="text-gray-600">+123-456-7890</p>
            </div>
        </section>
        <footer className="bg-blue-600 text-white py-4 text-center">
            <p>&copy; 2024 Tech Blogger. All rights reserved.</p>
        </footer>
    </main>
//    </div>
        
           
        
    );
}

export default Footer;
