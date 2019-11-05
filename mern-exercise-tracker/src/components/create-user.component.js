import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    // need to use .bind(this) so `this` is not undefined inside each function
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // initialize state ("variables" in React)
    this.state = {
      // set state corresponding to our MongoDB document:
      username: '',
    };
  }

  onChangeUsername(e) { // event to be called by username text box function
    // use this.setState({...}); instead of this.state.username = "new username";
    this.setState({
      username: e.target.value, // update just the username in this.state
    });
  }

  onSubmit(e) {
    e.preventDefault(); // prevent default HTML form action

    const user = {
      username: this.state.username,
    };

    console.log(user);

    this.setState({
      username: '', // reset form
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
};
