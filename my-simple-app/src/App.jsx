import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DataTable from './components/DataTable';
import './App.css';

function App() {
  const initialUsers = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', age: 30, email: 'mike@example.com' },
  ];

  const [data, setData] = useState(initialUsers);

  const addUser = () => {
    const newId = data.length + 1;
    const newUser = {
      id: newId,
      name: `User ${newId}`,
      age: 20 + newId,
      email: `user${newId}@example.com`,
    };
    setData([...data, newUser]);
  };

  const resetUsers = () => {
    setData(initialUsers);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <h2>Sample Data Table</h2>
        <p>Total Users: <strong>{data.length}</strong></p>
        <DataTable data={data} />

        <div className="btn-group">
          <button className="btn add" onClick={addUser}>Add User</button>
          <button className="btn reset" onClick={resetUsers}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;