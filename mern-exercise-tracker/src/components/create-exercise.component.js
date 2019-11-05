import React, { Component } from 'react';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    // need to use .bind(this) so `this` is not undefined inside each function
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // initialize state ("variables" in React)
    this.state = {
      // set state corresponding to our MongoDB document:
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  // this is a built-in React lifecycle method
  // componentDidMount is auto-called right before anything displays on the page
  componentDidMount() {
    // manually set for now (should fetch from DB)
    this.setState({
      users: ['test user 1', 'test user 2'],
      username: 'test user 1',
    });
  }

  onChangeUsername(e) { // event to be called by username text box function
    // use this.setState({...}); instead of this.state.username = "new username";
    this.setState({
      username: e.target.value, // update just the username in this.state
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault(); // prevent default HTML form action

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);

    window.location = '/'; // go back to home page
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  // like AngularJS ng-repeat:
                  this.state.users.map((user) => {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              {/* <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              /> */}
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
};
