import React from 'react';
import './HomePage.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuItems from './MenuItems';
import TableManagement from './TableManagement';
const HomePage = () => {
  return (
    <div className='homepage'>
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <label>Foodie Stop</label>
      </div>
      <ul className="app__navbar-links">
      <a href="/menu" className="p__opensans">
          Menu
        </a>
        <div />
        <a href="/book-table" className="p__opensans">
          Book Table
        </a>
        <a href="/login" className="p__opensans">
          Manager login
        </a>
        <div />
        <a href="/contact" className="p__opensans">
          Contact Us
        </a>
        </ul>
        </div>
        <div className="background-image" />
    </div>
 
  );
};

export default HomePage;
