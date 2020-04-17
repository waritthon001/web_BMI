import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

// import Navbar from "./components/bmi/navbar.component"
import ExercisesList from "./components/bmi/exercises-list.component";
import ShowBmi from "./components/bmi/showBmi";
import EditExercise from "./components/bmi/edit-exercise.component";
import CreateExercise from "./components/bmi/create-exercise.component";
import IncomeExpense from "./components/bmi/IncomeExpense";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />

            <Route path="/show" exact component={ShowBmi} />
           <Route path="/history"    exact component={ExercisesList} />
           <Route path="/edit/:id" component={EditExercise} />
           <Route path="/create" component={CreateExercise} />
           <Route path="/advice" component={IncomeExpense} />
           <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App