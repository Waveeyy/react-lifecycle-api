import React, { Component } from "react";

export class UsersClass extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.json().then((users) => {
          console.log(users);
          this.setState({ users: users });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        {this.state.users.map((item, index) => {
          return (
            <div key={index}>
              <h1>Name: {item.name}</h1>
              <h1>Username: {item.username}</h1>
              <h1>email: {item.email}</h1>
              <hr></hr>
            </div>
          );
        })}
      </>
    );
  }
}

export default UsersClass;
