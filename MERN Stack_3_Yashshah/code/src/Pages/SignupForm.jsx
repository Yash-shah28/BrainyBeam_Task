import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField.jsx';
import { Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
  const initialValues = {
    email: '',
    password: '',
    username: '',
    age: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
     .required('Email is required')
     .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Invalid email address'),
     
    password: Yup.string()
      .required('Password is required')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,'Password must be at least 6 characters and contain uppercase, lowercase, number, and special character'),
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters')
      .matches(
        /^[A-Za-z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores'
      ),
    age: Yup.number()
      .typeError('Age must be a number')
      .min(18, 'You must be at least 18')
      .max(99, 'You must be under 100')
      .required('Age is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);
    alert('Form submitted successfully!');
    resetForm(); 
  };

  return (
    <div className='container'>
      <h2 className='title' >Signup Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputField 
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <InputField 
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <InputField 
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <InputField 
            label="Age"
            name="age"
            type="number"
            placeholder="Enter your age"
          />

          <button type="submit"className='submitButton'>
            Submit
          </button>
        </Form>
      </Formik>
      <Link to="/Login" className='link'>
        Go to Login
      </Link>
    </div>
  );
};

export default SignupForm;
