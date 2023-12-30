import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const YourComponent = () => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        console.log('API Response:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (             //if the data is true before the colon is executed otherwise after the column is executed
        // Render the data in a Bootstrap table
        <table className="table table-info">
        <thead>
            <tr class ="table-success">
              <th className='text-center'>ID</th>
              <th className='text-center'>Email</th>
              <th className='text-center'>First Name</th>
              <th className='text-center'>Last Name</th>
              <th className='text-center'>Images</th>

              {/* Add more headers based on your API response structure */}
            </tr>
          </thead>
          <tbody>
            {data.data.map(user => (
              <tr key={user.id}>
                <td className='text-center'>{user.id}</td>
                <td className='text-center'>{user.email}</td>
                <td className='text-center'>{user.first_name}</td>
                <td className='text-center'>{user.last_name}</td>
                <td className='text-center'>{user.avatar}</td>

                {/* Add more columns based on your API response structure */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Loading indicator or other UI while data is fetching
        <p>Loading...</p>
      )}
    </div>
  );
};


export default YourComponent;
