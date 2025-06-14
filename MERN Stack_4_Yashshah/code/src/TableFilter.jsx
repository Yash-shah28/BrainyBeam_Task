import React, { useState } from 'react';

const data = [
  { id: 1, name: 'Alice', age: 20, role: 'Developer' },
  { id: 2, name: 'Bob', age: 30, role: 'Designer' },
  { id: 3, name: 'Charlie', age: 28, role: 'Manager' },
  { id: 4, name: 'David', age: 35, role: 'Developer' },
  { id: 5, name: 'Eva', age: 22, role: 'Intern' },
  { id: 6, name: 'Frank', age: 40, role: 'Architect' },
  { id: 7, name: 'Grace', age: 27, role: 'Tester' },
  { id: 8, name: 'Hannah', age: 32, role: 'Product Owner' },
  { id: 9, name: 'Ian', age: 29, role: 'Developer' },
  { id: 10, name: 'Jack', age: 31, role: 'Support' },
  { id: 11, name: 'Karen', age: 26, role: 'Designer' },
  { id: 12, name: 'Leo', age: 33, role: 'Scrum Master' },
  { id: 13, name: 'Mona', age: 24, role: 'Developer' },
  { id: 14, name: 'Nina', age: 36, role: 'Manager' },
  { id: 15, name: 'Oscar', age: 23, role: 'Intern' },
  { id: 16, name: 'Paul', age: 37, role: 'Tester' },
  { id: 17, name: 'Quinn', age: 29, role: 'Architect' },
  { id: 18, name: 'Rachel', age: 34, role: 'Product Owner' },
  { id: 19, name: 'Steve', age: 38, role: 'Support' },
  { id: 20, name: 'Tina', age: 28, role: 'Developer' },
];

const TableFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.id.toString().includes(searchTerm) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.age.toString().includes(searchTerm)
  );

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h2>Team Members</h2>
      <input
        type="text"
        placeholder="Search by id, name, role, or age"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginBottom: '1rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <tr key={item.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.age}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '8px' }}>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableFilter;
