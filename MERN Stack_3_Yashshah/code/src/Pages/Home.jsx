import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to Our App!</h1>
      <p>
        This web app demonstrates how to build clean, reusable, and robust forms using <strong>Formik</strong> and <strong>Yup</strong> for validation. 
      </p>
        
        <p>A custom input component is created to handle different types of inputs (email, password, text, number) with built-in validation, 
        error display, and form handling logic — making form development faster and more consistent.</p>

      <div style={{ marginTop: '1rem' }}>
        <Link to="/signup" style={{ marginRight: '1rem' }}>
          Go to Signup
        </Link>
        <Link to="/login">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
