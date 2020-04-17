// import React, { Component } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// // import React, { Component } from 'react';
// import '../App.css';

// class showBmi extends Component {

//   // constructor(props) {
//   //    super(props);
//   //    this.state = { name: 'Guest', weight: '', height: '', bmi: '', message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
//   //    this.submitMe = this.submitMe.bind(this);
//   //   //  this.heightchange = this.heightchange.bind(this);
//   //   //  this.weightchange = this.weightchange.bind(this);
//   //    this.change = this.change.bind(this);  
//   //    this.ticker = this.ticker.bind(this); 
//   //   //  this.blur = this.blur.bind(this); 
//   //    this.calculateBMI = this.calculateBMI.bind(this); 
     
//     state = {
//       exercises:[],
//       // message:'HELLO'
//     }
  
//     componentDidMount() {
//       this.getPosts();
//     }

//     getPosts(){

//       axios.get('http://localhost:5000/exercises/')
  
//       .then(response => {
//            console.log( response.data)
//           this.setState({ exercises: response.data[2]})
//           // console.log( this.state.exercises.height)
//         })
//         .catch((error) => {
//           console.log(error);
//         })
//     }
  

//   // heightchange(e){
//   //   this.setState({height: e.target.value});
//   //   e.preventDefault();
//   // }

//   // blur(e){
//   //  this.calculateBMI();
//   // }
//   //  weightchange(e){
//   //   this.setState({weight: e.target.value});
//   //   e.preventDefault();
//   // }

//   calculateBMI(){

//       var heightSquared = (this.state.exercises.height/100  * this.state.exercises.height/100);
//       var bmi = this.state.exercises.weight/ heightSquared;
//       var low = Math.round(18.5 * heightSquared);                                                         
//       var high = Math.round(24.99 * heightSquared);    
//       console.log(this.state.exercises.bmi)
//       // this.state.exercises.height
//       var message = "";
//       if( bmi >= 18.5  && bmi <= 24.99 ){
//           message = "You are in a healthy weight range";
//       }
//       else if(bmi >= 25 && bmi <= 29.9){
//         message = "You are overweight";
//       }
//       else if(bmi >= 30){
//           message ="You are obese";
//       }
//       else if(bmi < 18.5){
//         message = "You are under weight";
//       }
//       this.setState({message: message});  
//       this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
//       this.setState({bmi: Math.round(bmi * 100) / 100});   

//   }

//   // submitMe(e) {
//   //    e.preventDefault();
//   //    this.calculateBMI();
//   // }

//   // ticker() {
//   //   this.setState({time: new Date().toLocaleTimeString()})
//   // }
 
//   // componentDidMount(){
//   //   setInterval(this.ticker, 60000);
//   // }

//   // change(e){
//   //   e.preventDefault();
//   //   console.log(e.target);
//   //   this.setState({name: e.target.value});
//   // }

//   render() {
    
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>BMI Calculator</h2>
//         </div>
//           <form >
//             {/* <label>
//               Please enter your name
//             </label>
//             <input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change}   /> */}
//              <label>
//              Your height in cm: 
//             </label>
//             <input type="text" name="height" value={this.state.exercises.height} onBlur={this.blur}  />
//              <label>
//              Your weight in kg : 
//             </label>
//             <input type="text" name="weight" value={this.state.exercises.weight}    />
           
//             <label> Your BMI : </label>
//             <input type="text" name="weight" value={this.state.exercises.bmi}   />
             
//             {/* <input type="submit" value="Submit"/> */}
//           </form>
//               {this.state.message}
//               {this.state.optimalweight}
      

//               <div className="inc-exp-container">
//        <table className="table table-striped mt-3">
//         <thead>
//           <tr>
//        <th> BMI kg/m2</th>
//             <th>อยู่ในเกณท์</th>
//             <th>ภาวะเสี่ยงต่อโรค</th>
//             <th>คำแนะนำ</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//           <td>น้อยกว่า 18.50</td>
//           <td>น้ำหนักน้อย / ผอม</td>
//           <td>มากกว่าคนปกติ</td>
//           <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td>
//           </tr>
//           <tr>
//             <td>ระหว่าง 18.50 - 22.90</td>
//             <td>ปกติ (สุขภาพดี)</td>
//             <td>เท่าคนปกติ</td>
//             <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td>
//           </tr>
//           <tr>
//             <td>ระหว่าง 23 - 24.90</td>
//             <td>ท้วม / โรคอ้วนระดับ 1</td>
//             <td>อันตรายระดับ 1</td>
//             <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td>
//           </tr>
//           <tr>
//             <td>ระหว่าง 25 - 29.90</td>
//             <td>อ้วน / โรคอ้วนระดับ 2</td>
//             <td>อันตรายระดับ 2</td>
//             <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td>
//           </tr>
//           <tr>
//             <td>มากกว่า 30</td>
//             <td>อ้วนมาก / โรคอ้วนระดับ 3</td>
//             <td>อันตรายระดับ 3</td>
//             <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td>
//           </tr>
//         </tbody>
      
//       </table>
//     </div>


//       </div>
//     );
//   }
// }

// export default showBmi;
import React, { Component } from 'react';
import './A.css';

class App extends Component {

  constructor(props) {
     super(props);
     this.state = { name: 'Guest', weight: '', height: '', bmi: '', message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
     this.submitMe = this.submitMe.bind(this);
     this.heightchange = this.heightchange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.change = this.change.bind(this);  
     this.ticker = this.ticker.bind(this); 
     this.blur = this.blur.bind(this); 
     this.calculateBMI = this.calculateBMI.bind(this); 
  }


  heightchange(e){
    this.setState({height: e.target.value});
    e.preventDefault();
  }

  blur(e){
   this.calculateBMI();
  }
   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  calculateBMI(){

      var heightSquared = (this.state.height/100  * this.state.height/100);
      var bmi = this.state.weight / heightSquared;
      var low = Math.round(18.5 * heightSquared);                                                         
      var high = Math.round(24.99 * heightSquared);    
      var message = "";
      if( bmi >= 18.5  && bmi <= 24.99 ){
          message = "You are in a healthy weight range";
      }
      else if(bmi >= 25 && bmi <= 29.9){
        message = "You are overweight";
      }
      else if(bmi >= 30){
          message ="You are obese";
      }
      else if(bmi < 18.5){
        message = "You are under weight";
      }
      this.setState({message: message});  
      this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
      this.setState({bmi: Math.round(bmi * 100) / 100});   

  }

  submitMe(e) {
     e.preventDefault();
     this.calculateBMI();
  }

  ticker() {
    this.setState({time: new Date().toLocaleTimeString()})
  }
 
  componentDidMount(){
    setInterval(this.ticker, 60000);
  }

  change(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2 id="a2">BMI Calculator</h2>
        </div>
          <form onSubmit={this.submitMe}>
            {/* <label>
              Please enter your name
            </label>
            <input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change}   /> */}
             <label id="aa">
             Enter your height in cm: 
            </label>
            <input id="aaa"className="form-control" type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange}   />
             <label id="aa">
             Enter your weight in kg : 
            </label>
            <input id="aaa" className="form-control" type="text" name="weight" value={this.state.weight} onChange={this.weightchange}    />
            {/* <label id="aab">{this.state.checked}  It's currently  {this.state.time} where you are living.</label> */}
            <label id="aab">{this.state.checked} Your BMI is{this.state.bmi} </label>
              <label id="aab">{this.state.message}</label>
              <label id="aab">{this.state.optimalweight}</label>
             
            <input  type="submit" value="Submit"/>
          </form>
      
              <div id="aa10">
       <table className="table table-dark table-striped" id="aa8">
        <thead>
          <tr>
       <th id="aa9"> BMI kg/m2</th>
            <th id="aa9">อยู่ในเกณท์</th>
            <th id="aa9">ภาวะเสี่ยงต่อโรค</th>
            {/* <th>คำแนะนำ</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>น้อยกว่า 18.50</td>
          <td>น้ำหนักน้อย / ผอม</td>
          <td>มากกว่าคนปกติ</td>
          {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
          <tr>
            <td>ระหว่าง 18.50 - 22.90</td>
            <td>ปกติ (สุขภาพดี)</td>
            <td>เท่าคนปกติ</td>
            {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
          <tr>
            <td>ระหว่าง 23 - 24.90</td>
            <td>ท้วม / โรคอ้วนระดับ 1</td>
            <td>อันตรายระดับ 1</td>
            {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
          <tr>
            <td>ระหว่าง 25 - 29.90</td>
            <td>อ้วน / โรคอ้วนระดับ 2</td>
            <td>อันตรายระดับ 2</td>
            {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
          <tr>
            <td>มากกว่า 30</td>
            <td>อ้วนมาก / โรคอ้วนระดับ 3</td>
            <td>อันตรายระดับ 3</td>
            {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
        </tbody>
      
      </table>
    </div>
      </div>
      
    );
  }
}

export default App;
