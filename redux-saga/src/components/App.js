import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest } from '../actions/users';
import UserList from './UserList';
import NewUserForm from './NewUserForm';

class App extends Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }
  handleSubmit = ({ firstName, lastName})=> {
    console.log(firstName, lastName);
    this.props.createUserRequest({
      firstName,
      lastName
    })
  }
  handleDelete = (userId)=> {
    console.log('call delete');
    this.props.deleteUserRequest(userId);
  }
  render() {
    console.log('render', this.props.users.items);
    if (!this.props.users) {
      return <div>Loading...</div>
    }
    return (
      <div style={{ margin: '0 auto', padding: 20, maxWidth: '600px'}}>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UserList users={this.props.users.items}onDelete={this.handleDelete} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
})
export default connect(mapStateToProps, { getUsersRequest, createUserRequest, deleteUserRequest })(App);
