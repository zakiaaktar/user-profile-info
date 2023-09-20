import React from 'react';

const UserCard = ({user}) => {
    const {id, name, email, img} = user;
    return (
        <div>
            <img src={img} alt="user-img" />
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
        </div>
    );
};

export default UserCard;