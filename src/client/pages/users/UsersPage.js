import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersAsync } from '../../actions';
import UsersList from '../../components/users/UsersList';

class UsersPage extends Component {
    componentDidMount() {
        this.props.fetchUsersAsync('http://jsonplaceholder.typicode.com/users');
    }

    renderPage() {
        if(this.props.loading && !this.props.users) {
            return <div>...Loading Users</div>;
        } else if(this.props.errorMessage) {
            return <div>{this.props.errorMessage}</div>;
        } else {
            return <UsersList users={this.props.users}/>;
        }
    }

    render() {
        return (
            <div>
                <h1>List of Users</h1>
                {this.renderPage()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loading, users, errorMessage } = state.users;

    return { loading, users, errorMessage };
}

export default connect(mapStateToProps, { fetchUsersAsync })(UsersPage);