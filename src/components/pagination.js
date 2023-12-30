import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const PaginationExample = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
        const data = await response.json();
        setUsers(data.data); // Assuming the API response has a 'data' property with the user information
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
<h1 className='alert alert-primary'>User List</h1>
      <ul className='exclamation-triangle-fill'>
        {users.map((user) => (
          <li key={user.id}>{user.first_name} {user.last_name}</li>
        ))}
      </ul>
      <div>
        <button 
        className='btn btn-primary'
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}>
          Previous
        </button>
        <span className='text-danger '>Page {currentPage}</span>
        <button
            className='btn btn-success'
            onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default PaginationExample;
