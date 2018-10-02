import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import Posts from './components/Posts';
import Users from './components/Users';

import FirstNumber from './components/FirstNumber';
import SecondNumber from './components/SecondNumber';

class App extends Component {

  state = {
    posts: [],
    users: [],
    firstNumber: Math.random(),
    secondNumber: Math.random()
  };

  componentWillMount() {
    setInterval(() => {
      this.setState({
        firstNumber: Math.random(),
      });
    }, 100);

    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data).then(posts => {
      setTimeout(() => {
        this.setState({posts});
      }, 500);
    });

    axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data).then(users => {
      setTimeout(() => {
        this.setState({users});
      }, 300);
    });
  }

  render() {
    return (
      <div className="App">
        <FirstNumber firstNumber={this.state.firstNumber}/>
        <SecondNumber secondNumber={this.state.secondNumber}/>
        <hr/>
        <Users {...this.state}/>
        <hr/>
        <Posts {...this.state}/>
      </div>
    );
  }
}

export default App;
