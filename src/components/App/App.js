import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';

class App extends Component {

  state = {
    galleryList: [],
  }

  getPics = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then( response => {
      console.log('L25', response.data);
      this.setState({
        galleryList: response.data
      })
      console.log('this.state', this.state);
      
    })
    .catch( error => {
      alert('error', error);
    })
  } // end getPics

  componentDidMount() {
    this.getPics();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <GalleryList galleryList={this.state.galleryList}/>
      </div>
    );
  }
}

export default App;
