import React, { Component } from 'react';
import UsersListItem from './UsersListItem';

export default class UsersList extends Component {
    renderList() {
        return this.props.users.map(user => (
            <UsersListItem key={user.id} user={user}/>
        ));
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}