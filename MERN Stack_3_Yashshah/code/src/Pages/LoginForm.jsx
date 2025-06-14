import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField.jsx';
import { Link } from 'react-router-dom';
import './LoginForm.css'; 


const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
    password: Yup.string()
      .required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Login submitted:', values);
    alert('Login successful!');
    resetForm();
  };

  return (
    <div className='container'>
      <h2 className='title' >Login Form</h2>
    <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}
    >
      <Form>
        <InputField 
            name="email"
            type="email" 
            label="Email" 
            placeholder="Enter email" 
            autoComplete="username" 
        />
        <InputField 
            name="password" 
            type="password" 
            label="Password" 
            placeholder="Enter password" 
            autoComplete="current-password" 
        />
        <button  type="submit" className='submitButton'>
            Submit
          </button>
      </Form>
    </Formik>
    <Link to="/signup" className='link'>
              Go to Signup
            </Link>
    </div>
  );
};

export default LoginForm;
