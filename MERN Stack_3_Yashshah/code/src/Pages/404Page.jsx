import React from 'react';
import { Link } from 'react-router-dom';
import  './404Page.css';

const NotFoundPage = () => {
  return (
    <div className='container'>
      <h1 className='errorCode'>404</h1>
      <p className='message'>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className='homeLink'>Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
