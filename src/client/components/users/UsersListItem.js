import React from 'react';

export default function UsersListItem(props) {
    const { user } = props;

    return (
        <li key={user.id}>{user.name}</li>
    );
} 