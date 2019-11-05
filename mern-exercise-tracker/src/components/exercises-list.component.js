import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Exercise from './exercise.component.js';
import axios from 'axios';

// // functional React component: (i.e. has no state or lifecycle methods = "functional programming")
// const Exercise = (props) => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0,10)}</td>
//     <td>
//       <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//     </td>
//   </tr>
// );

// class React component:
export default class ExercisesList extends Component {
  constructor(props) {
    super(props); // always do this!

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
    };
  }

  // this is a built-in React lifecycle method
  // componentDidMount is auto-called right before anything displays on the page
  componentDidMount() {
    const backendEndpoint = 'http://localhost:5000/exercises';
    axios.get(backendEndpoint) // get list of exercises from backend!
      .then((res) => {
        this.setState({
          exercises: res.data, // exercises.js: res.json(exercises)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteExercise(id) { // id will = MongoDB ObjectId
    axios.delete('http://localhost:5000/exercises/' + id)
      .then((res) => {
        console.log(res.data); // exercises.js: res.json('Exercise deleted.')
        this.setState({
          exercises: this.state.exercises.filter(el => el._id !== id), // _id is auto-created by MongoDB
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  exerciseList() {
    return this.state.exercises.map((e) => {
      // <Exercise> component in exercise.component.js:
      // gets its props passed in via const Exercise = (props) => (...);
      return <Exercise exercise={e} 
                       deleteExercise={this.deleteExercise} 
                       key={e._id}/>;
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    );
  }
};
