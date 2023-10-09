import React, { Component } from "react";
// import { nanoid } from 'nanoid';

import ContactsList from './components/contacts';
// import Statistics from './components/Statistics/';
// import Section from './components/SectionTitle/';

const INITIAL_STATE = {
  contacts: [],
  name: ''
};

export class App extends Component {
  
  state = {...INITIAL_STATE}

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState( {name: event.currentTarget.value} );
  // }

  // handleTelChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState( {tel: event.currentTarget.value} );
  // }

  handleChange = event => {
    const {name, value} = event.currentTarget;
    this.setState( {[name]: value} );
  }

  handleSubmit = event => {
    event.preventDefault();
    const {contacts, name} = this.state;

    this.setState ({
      contacts: contacts.push(name)
    })
      
    this.reset();
    
    console.log(contacts, name);
  }

  reset = () => {
    this.setState({ ...INITIAL_STATE, ...this.state.contacts });
  };

  render() {
       // const { good, neutral, bad } = this.state;
  
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
          Name<input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </label><br/><br/>
          {/* <label htmlFor="tel">
            Phone<input type="tel" name="tel" value={this.state.tel} onChange={this.handleChange} required />
          </label><br/><br/> */}
          <button type='submit'>Add contact</button>
          <h2>Contacts</h2>
          <div>
          <ContactsList contacts={this.state.contacts}/>
          </div>
        </form>
       
      </div>
    )
  }
}

// dfwvdfvdfv