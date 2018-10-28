import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';



class GalleryList extends Component {
  render() {
    return (
        <div>
            {this.props.galleryList.map( pic =>
            <div key={pic.id} className="picCard">
              <GalleryItem item={pic}/>
              <div className="likeButton">
                <button onClick ={this.props.likeClickHandler(pic.id)}>Like it!</button>
                <p>{pic.likes} people like this!</p>
              </div>
            </div>
            )}
        </div>
    );
  }
}

export default GalleryList;