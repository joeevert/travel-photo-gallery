import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {
  render() {
    return (
        <div className="pic">
            {this.props.galleryList.map( pic =>
                <GalleryItem key={pic.id} item={pic}/>)}
        </div>
    //   <div>
    //     {this.props.galleryList.map( pic =>
    //     <div key={pic.id}>
    //         <img src={pic.path}/>
    //         <p>{pic.description}</p>
    //         <button>Like it!</button>
    //         <p>{pic.likes} people like this!</p>
    //     </div>)}
    //   </div>
    );
  }
}

export default GalleryList;
