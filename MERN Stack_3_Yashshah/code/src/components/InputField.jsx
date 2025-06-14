/* eslint-disable react-hooks/rules-of-hooks */
import { useField } from 'formik';

function inputField({label, ...props}) {
  const [field, meta ] = useField(props);
  return (
    <div style={{ marginBottom: '1rem'}} >
        <label style={{ display: 'block', marginBottom: '0.3rem' }}>{label}</label>
      <input 
        {...field} 
        {...props} 
        autoComplete={props.autoComplete || 'off'}  
        style={{
          padding: '0.5rem',
          width: '100%',
          border: meta.touched && meta.error ? '1px solid red' : '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      {meta.touched && meta.error ? (
        <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>
          {meta.error}
        </div>
      ) : null}
      
    </div>
  )
}

export default inputField
