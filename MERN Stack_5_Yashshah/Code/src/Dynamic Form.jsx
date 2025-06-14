import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ id: uuidv4(), value: '' }]);
  const [submittedData, setSubmittedData] = useState([]);

  const handleAddField = () => {
    setFields([...fields, { id: uuidv4(), value: '' }]);
  };

  const handleChange = (id, newValue) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, value: newValue } : field
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(fields);
    // Reset field values after submission
    setFields(fields.map(field => ({ ...field, value: '' })));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: '8px' }}>
            <input
              type="text"
              placeholder={`Field ${index + 1}`}
              value={field.value}
              onChange={(e) => handleChange(field.id, e.target.value)}
              style={{ padding: '0.5rem', width: '100%' }}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddField}
          style={{
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Field
        </button>
        <br />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>

      {submittedData.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>
          <ul>
            {submittedData.map((field, index) => (
              <li key={field.id}>
                <strong>Field {index + 1}:</strong> {field.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
