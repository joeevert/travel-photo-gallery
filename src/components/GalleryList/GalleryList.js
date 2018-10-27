import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {
  render() {
    return (
        <div className="pic">
            {this.props.galleryList.map( pic =>
              <GalleryItem key={pic.id} item={pic}/>)}
        </div>
    );
  }
}

export default GalleryList;
