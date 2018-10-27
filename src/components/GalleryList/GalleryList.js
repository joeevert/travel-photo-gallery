import React, { Component } from 'react';

class GalleryList extends Component {

  render() {
    return (
      <div>
        {this.props.galleryList.map( pic =>
        <div key={pic.id}>
            <img src={pic.path}/>
            <p>{pic.description}</p>
            <button>Like it!</button>
            <p>{pic.likes} people like this!</p>

        </div>)}
      </div>
    );
  }
}

export default GalleryList;
