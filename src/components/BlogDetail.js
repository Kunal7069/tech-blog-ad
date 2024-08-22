import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function BlogDetail() {
  const { title,imageUrl } = useParams();
  const formattedTitle = title.replace(/-/g, ' ');

  // Example image URL. You should replace this with the actual URL.


  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <img 
          src={imageUrl} 
          alt={formattedTitle} 
          className="w-full h-60 object-cover rounded-t-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {formattedTitle}
        </h1>
        <p className="text-gray-700 leading-relaxed">
          This is the detailed page for the blog titled "{formattedTitle}". Here, you can provide the full content of the blog post, along with any additional information or images. Make sure to style this page to match the overall design of your website and provide a great user experience.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default BlogDetail;
