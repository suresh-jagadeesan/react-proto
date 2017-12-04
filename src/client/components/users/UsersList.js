import React, { Component } from 'react';
import UsersListItem from './UsersListItem';

export default class UsersList extends Component {
    renderList() {
        this.props.users.map(user => (
            <UsersListItem user={user}/>
        ));
    }

    render() {
        return (
            <div>
                <h1>List of Users</h1>
                {this.renderList()}
            </div>
        );
    }
}