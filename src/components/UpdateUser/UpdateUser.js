import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))

    }, [])
    return (
        <div>
            <h2>{user.name}</h2> ::
            <h2>This is Update User{user.email}</h2>
        </div>
    );
};

export default UpdateUser;