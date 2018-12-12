import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {

  likesStatement = (likes) => {
    console.log(likes);
    console.log('in likeStatement');
    if (likes === 0 ) {
      return 'Nobody likes this!';
    }
    else if (likes === 1 ) {
      return '1 person likes this!';
    }
    else {
      return `${likes} people like this!`;
    }
  } // end likeStatement

  render() {
    return (
        <div>
            {this.props.galleryList.map( pic =>
            <div key={pic.id} className="picCard">
              <GalleryItem item={pic}/>
              <div className="likeButtonDiv">
                <button className="likeButton" onClick={this.props.likeClickHandler(pic.id)}>Like it!</button>
                <h3>{this.likesStatement(pic.likes)}</h3>
                <button className="deleteButton" onClick={() => this.props.deletePic(pic.id)}>Delete</button>
              </div>
            </div>
            )}
        </div>
    );
  }
}

export default GalleryList;