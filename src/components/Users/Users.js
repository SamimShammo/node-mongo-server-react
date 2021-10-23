import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
           // delete an user 
           const handleDeleteUser = id => {
            const process = window.confirm('are you confirm delete')
            if(process){
                const url = `http://localhost:5000/users/${id}`
                fetch(url, {
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        alert('deleted')
                        const remainingUsers = user.filter(users => users._id !== id)
                         setUser(remainingUsers)
                    }
               
                })
             
            }
        }


    return (
        <div>
            <h2>This is Users {user.length}</h2>
            <ol>
                {
                    user.map(users => <li key={users.id}>
                        {users.name} :: {users.email} 
                      <Link to={`/users/update/${users._id}`}><button>Update</button></Link>
                        <button onClick={() => handleDeleteUser(users._id)}>X</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Users;