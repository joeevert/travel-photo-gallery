import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {

  state = {
    newPic: {
      path: '',
      description: '',
    },
    galleryList: [],
  }

  handleChangeFor = (propertyName) => {
    console.log('in handleChangeFor');
    
    return (event) => {
      this.setState( {
        newPic: {
          ...this.state.newPic,
          [propertyName]: event.target.value
        }
      } );
    }
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

  likeClickHandler = (id) => (event) => {    
    console.log('in likeClickHandler');
    console.log('id', id);

    axios({
      method: 'PUT',
      path: `/gallery/like/${id}`,
      data: {
        likes: this.likes
      }
    })
    .then( response => {
      console.log('response', response);
      
      this.getPics();
    })
    .catch ( error => {
      alert('error adding like', error);
    })
  } // end likeClickHandler

  addPic = (event) => {
    console.log('in addPic');
    event.preventDefault();
    console.log(this.newPic);
    
    axios({
      method: 'POST',
      url: '/gallery',
      data: this.state.newPic
    }).then((response) => {
      console.log('Response.data:', response.data);
      this.getPics();
      this.setState({
        newPic: {
          path: '',
          description: '',
        }
      })
    }).catch((error) => {
      alert('error adding pic', error);
    })
  } // end addPic

  componentDidMount() {
    this.getPics();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Other People's Travel Pics</h1>
        </header>
        <section>
          <h2>Add Picture</h2>
          <GalleryForm newPic={this.state.newPic}
            handleChangeFor={this.handleChangeFor} 
            handleSubmit={this.addPic}/>
       </section>
        <GalleryList galleryList={this.state.galleryList} likeClickHandler={this.likeClickHandler}/>
      </div>
    );
  }
}

export default App;
