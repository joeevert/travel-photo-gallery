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
    console.log('in getPics');
    
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
      alert('error getting pics', error);
    })
  } // end getPics

  likeClickHandler = (id) => {    
    console.log('in likeClickHandler');
    console.log('id', id);
    
    axios({
      method: 'PUT',
      url: '/gallery/like/:id',
      data: {
        likes: this.likes
      }
    })
    .then( response => {
      this.getPics();
    })
    .catch ( error => {
      alert('error adding like', error);
    })
  } // end likeClickHandler

  componentDidMount() {
    this.getPics();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <GalleryList galleryList={this.state.galleryList} likeClickHandler={this.likeClickHandler}/>
      </div>
    );
  }
}

export default App;
