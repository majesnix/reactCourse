import React, { Component } from 'react';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';
import './App.css';

class App extends Component {
    state = {
        username: 'majesnix'
    };

    changedUsernameHandler = event => {
        this.setState({
            username: event.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <UserInput
                    changed={this.changedUsernameHandler}
                    username={this.state.username}
                />
                <UserOutput username={this.state.username} />
                <UserOutput username="miyu" />
                <UserOutput username="Buster" />
            </div>
        );
    }
}

export default App;
