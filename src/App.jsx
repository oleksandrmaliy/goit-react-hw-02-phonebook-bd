import React, { Component } from "react";
// import { nanoid } from 'nanoid';

// import Feedback from './components/Feedback/';
// import Statistics from './components/Statistics/';
// import Section from './components/SectionTitle/';

export class App extends Component {
  
  state = {
    contacts: [],
    name: '',
    tel: ''
  }

  handleNameChange = event => {
    console.log(event.currentTarget.value);
    this.setState( {name: event.currentTarget.value} );
  }

  handleTelChange = event => {
    console.log(event.currentTarget.value);
    this.setState( {tel: event.currentTarget.value} );
  }
//   onLeaveFeedback = (option) => {
//         this.setState(prevState => (
//          {[option]: prevState[option] + 1}
//         ))
// }

  render() {
       // const { good, neutral, bad } = this.state;
  
    return (
      <div>
        <form> <br/>
          <label htmlFor="name">
          Name<input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} required />
          </label><br/><br/>
          <label htmlFor="name">
            Phone<input type="tel" name="tel" value={this.state.tel} onChange={this.handleTelChange} required />
          </label>
        </form>
       
      </div>
    )
  }
}

// dfwvdfvdfv