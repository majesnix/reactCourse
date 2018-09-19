import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 27},
      {name: 'Miyu', age: 1},
      {name:'Yui', age: 10}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Dominic', age: 27},
        {name: 'Miyu', age: 1},
        {name:'Yui', age: 15}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <p>I'm a React App</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name="Miyu" age="1">My Hobbies: Hamstering, Racing</Person>
        <Person name="Yui" age="10"/>
      </div>
    );
  }
}

export default App;
