import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const Users = () => {
    const [users, setUsers] = useState([]);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);


    return (
        <div className='my-16'>
        <div className='text-center'>
        <h2 className="text-4xl font-serif font-bold text-blue-700"> USER PROFILE INFO</h2>
        </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8'>
                {
                    users.map(user => <UserCard
                        key={user._id}
                        user={user}
                    ></UserCard>)
                }
            </div>
            </div>
    );
};

export default Users;