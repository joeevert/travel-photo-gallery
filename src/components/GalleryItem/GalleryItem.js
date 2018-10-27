import React, { Component } from 'react';

class GalleryItem extends Component {

  render() {
    return (
        <div>
            <img src={this.props.item.path} alt={this.props.item.description}/>
            <p>{this.props.item.description}</p>
            <button>Like it!</button>
            <p>{this.props.item.likes} people like this!</p>
        </div>
    );
  }
}

export default GalleryItem;
