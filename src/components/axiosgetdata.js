import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      {data ? (
        // Render the entire data object
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        // Loading indicator or other UI while data is fetching
        <p>Loading...</p>
      )}
    </div>
  );
      }
export default YourComponent;
