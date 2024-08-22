import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
function AboutUsPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <Navbar />

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Introduction */}
                <section className="bg-gray-50 py-12 px-6 rounded-lg shadow-lg mb-12">
    <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to <span className="font-semibold text-blue-600">Tech Blogger</span>! We are dedicated to providing the latest insights and updates in the tech world. Our mission is to keep you informed about the latest trends, innovations, and best practices in technology.
            </p>
        </div>
    </div>
</section>


                {/* Team Members */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Team Member 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-800">Amit Singh</h3>
                            <p className="text-gray-600">Lead Developer</p>
                            <p className="mt-2 text-gray-500">
                                Amit is a seasoned developer with over 10 years of experience in the tech industry. He specializes in JavaScript and web development.
                            </p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-800">Jatin Sharma</h3>
                            <p className="text-gray-600">Senior Content Writer</p>
                            <p className="mt-2 text-gray-500">
                                Jatin has a deep passion for technology and writing. He brings his expertise to the team by creating engaging and informative content.
                            </p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-800">Shobhit Sharma</h3>
                            <p className="text-gray-600">Designer</p>
                            <p className="mt-2 text-gray-500">
                                Shobhit is our creative genius, responsible for crafting visually stunning designs that enhance user experience.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer/>
               
            </main>

            {/* Footer */}
            
        </div>
    );
}

export default AboutUsPage;
