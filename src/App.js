import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import Posts from './components/Posts';

class App extends Component {

  state = {
    posts: []
  };

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data).then(posts => {
      setTimeout(() => {
        this.setState({posts});
      }, 2000);
    })
  }

  render() {
    return (
      <div className="App">
        <Posts {...this.state}/>
      </div>
    );
  }
}

export default App;
