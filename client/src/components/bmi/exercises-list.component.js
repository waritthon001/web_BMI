import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './1.css'

const Exercise = props => (
  <tr>
    <td>{props.exercise.name}</td>
    <td>{props.exercise.weight}</td>
    <td>{props.exercise.height}</td>
    <td>{props.exercise.bmi}</td>
    <td>{props.exercise.age}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10 mt-5 mx-auto">
        <h3 id="aa02">BMI History</h3>
        <table className="table table-dark table-striped mt-3" id="aa8">
          <thead>
            <tr>
              <th id="aa9">Name</th>
              <th id="aa9">Weight</th>
              <th id="aa9">Height</th>
              <th id="aa9">bmi</th>
              <th id="aa9">Age</th>
              <th id="aa9">Date</th>
              <th id="aa9">Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
      </div>
      </div>
    )
  }
}