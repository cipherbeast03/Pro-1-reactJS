import React, { useState, useEffect } from 'react';
import './admin.css';

const Admin = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://stackblitzstarterscgarmq-cjmt--3000--bec01ace.local-credentialless.webcontainer.io/profiles'
      ); // Replace with your API endpoint
      const jsonData = await response.json();
      setTableData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div className="home-container">
      <h1>Admin Dashboard</h1>
      <h1>Table Display</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
