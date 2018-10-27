import React, { Component } from 'react';
import './App.css';

state = {
  newPic: {
    id: '',
    title: '',
    description: '',
    path: ''
  },
  galleryList: [],
}

getPics = () => {
  axios.get('/gallery').then( response => {
    this.setState({
      galleryList: response.data
    })
  }).catch( error => {
    alert('Error', error);
  })
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
