import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './1.css'

export default class CreateExercise extends Component {
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

  // componentDidMount() {
  //   axios.get('http://localhost:5000/users/')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map(user => user.username),
  //           username: response.data[0].username
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // }

  
  onChangeName(e) {
    this.setState({
      name: e.target.value
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
  
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  
  setBmi = () => {
    console.log(this.state.weight)
    console.log(this.state.height)
    let bmis = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2); 
    this.setState({ bmi:bmis  }); 
  }
  
  onSubmit(e) {
    e.preventDefault();
    // this.setBmi()

    if (!this.validateForm(this.state.name, this.state.weight)) {
      return false;
    }

    if (! this.validateForm(this.state.height, this.state.age)) {
      return false;
    }


    var bb=this.state.bmi
    // alert("Your BMI is"+bb)
    var low = Math.round(18.5 * this.state.bmi);                                                         
    var high = Math.round(24.99 * this.state.bmi);   
    var message = "";
    if( this.state.bmi >= 18.5  && this.state.bmi <= 24.99 ){
        message = "  You are in a healthy weight range";
    }
    else if(this.state.bmi >= 25 && this.state.bmi <= 29.9){
      message = "  You are overweight";
    }
    else if(this.state.bmi >= 30){
        message ="  You are obese";
    }
    else if(this.state.bmi < 18.5){
      message = "  You are under weight";
    }
    alert("    Your BMI is "+bb +"\n"+ message )
    // this.setState({message: message});  
    // this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    


    const exercise = {
      name: this.state.name,
      weight: this.state.weight,
      height: this.state.height,
      bmi: this.state.bmi,
      age: this.state.age,
      date: this.state.date
    }
    
    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/history';
  }


  validateForm = (name, weight) => {
    if (!name || !weight) {
      window.alert('Please fill in ALL data fields.');
      return false;
    } else if (!isNaN(name)) {
      window.alert('Please fill only TEXT detail in transaction name.');
      return false;
    } else if (+weight === 0) {
      window.alert('Amount CANNOT be zero!');
      return false;
    }


    return true;
  }

  validateForm = (height, age) => {
    if (!height || !age) {
      window.alert('Please fill in ALL data fields.');
      return false;
    // } else if (!isNaN(name)) {
    //   window.alert('Please fill only TEXT detail in transaction name.');
    //   return false;
    } else if (+height === 0) {
      window.alert('Amount CANNOT be zero!');
      return false;
  
    } else if (+age === 0) {
      window.alert('Amount CANNOT be zero!');
      return false;
    }

    return true;
  }

  render() {
    return (
    <div className="container">
        <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
      <h2 id="aa02"> ดัชนีมวลกาย(BMI)</h2>
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
          <input
          id="aa06"
            type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div >
          <label id="aa06">Weight (km.): </label>
          <input 
          id="aa06"
              type="text" 
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
              />
        </div>
        <div className="form-group">
          <label id="aa03">Height (cm.): </label>
          <input 
          id="aa06"
              type="text" 
              className="form-control"
              value={this.state.height}
              onChange={this.onChangeHeight}
              />
        </div>
        {/* <div className="form-group">
          <label id="aa">Bmi (in minutes): </label>
          <input 
          id="aaa"
              type="text" 
              className="form-control"
              value={this.state.bmi}
              onChange={this.onChangeBmi}
              />
        </div> */}
        <div className="form-group">
          <label id="aa03">Age : </label>
          <input 
          id="aa06"
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
        
        {/* <h1>Your BMI : {this.state.bmi} </h1>  */}
        
        <div className="form-group">
          <input type="submit" value="Calculate" className="btn btn-lg btn-block" id="ab01" />
        </div>
      </form>
      <div id="x"></div>
    </div>
    </div>
    </div>
    )
  }
}