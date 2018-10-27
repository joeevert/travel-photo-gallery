import React, { Component } from 'react';

class GalleryItem extends Component {

  render() {
    return (
        <div key={this.props.item.id}>
            <img src={this.props.item.path}/>
            <p>{this.props.item.description}</p>
            <button>Like it!</button>
            <p>{this.props.item.likes} people like this!</p>
        </div>
    );
  }
}

export default GalleryItem;
