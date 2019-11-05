import React from 'react';
// import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// functional React component: (i.e. has no state or lifecycle methods = "functional programming")
const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <button className="link-button" 
                                                                   onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button>
    </td>
  </tr>
);

export default Exercise;
