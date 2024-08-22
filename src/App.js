import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogDetail from './components/BlogDetail';
import AboutUsPage from './components/AboutUsPage';
import Footer from './components/Footer';
export default function App() {
 
    // Adding Dummy Data to pass as props
  
    return (
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:title" element={<BlogDetail />} />
        <Route path="/about-us/" element={<AboutUsPage />} />
      </Routes>
    </Router>
    )
}