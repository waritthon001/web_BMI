import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeBmi = this.onChangeBmi.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      weight: 0,
      height: 0,
      bmi: 0,
      age: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          weight: response.data.weight,
          height: response.data.height,
          bmi: response.data.bmi,
          age: response.data.age,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeName(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    })
    // this.setBmi()
  }
  onChangeHeight(e) {
    
    this.setState({
      height: e.target.value
    })
  }
  onChangeBmi(e) {
    this.setState({
      bmi: e.target.value
    })
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
     this.setBmi()
  }
  setBmi = () => {
    console.log(this.state.weight)
    console.log(this.state.height)
    let bmis = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2); 
    this.setState({ bmi:bmis  }); 
  }
  
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();
    var bb=this.state.bmi
    alert("Your BMI is"+bb)
    
    const exercise = {
      name: this.state.name,
      weight: this.state.weight,
      height: this.state.height,
      bmi: this.state.bmi,
      age: this.state.age,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

      window.location = '/history';
  }

  render() {
    return (
      <div className="container">
      <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
      <h3 id="aa02">Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        {/* <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div> */}
       <div className="form-group"> 
          <label id="aa03">Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group">
          <label id="aa03">Weight (km.): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
              />
        </div>
        <div className="form-group">
          <label id="aa03">Height (cm.): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.height}
              onChange={this.onChangeHeight}
              />
        </div>
        {/* <div className="form-group">
          <label id="aa">Bmi (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.bmi}
              onChange={this.onChangeBmi}
              />
        </div> */}
        <div className="form-group">
          <label id="aa03">Age : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
              />
        </div>
        <div className="form-group">
          <label id="aa03">Date: </label>
          <div>
            <DatePicker
            id="aa100"
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit" className="btn btn-lg btn-block"id="aa04"/>
        </div>
      </form>
      <div id="x"></div>
    </div>
    </div>
    </div>
    )
  }
}