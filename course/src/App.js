import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 27 },
            { name: 'Miyu', age: 1 },
            { name: 'Yui', age: 10 }
        ]
    };

    switchNameHandler = newName => {
        this.setState({
            persons: [
                { name: newName, age: 27 },
                { name: 'Miyu', age: 1 },
                { name: 'Yui', age: 15 }
            ]
        });
    };

    nameChangedHandler = event => {
        this.setState({
            persons: [
                { name: 'Max', age: 27 },
                { name: 'Miyu', age: 1 },
                { name: event.target.value, age: 10 }
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <p>I'm a React App</p>
                <button onClick={() => this.switchNameHandler('Hans')}>
                    Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                >
                    My Hobbies: Hamstering, Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    changed={this.nameChangedHandler}
                />
            </div>
        );
    }
}

export default App;
